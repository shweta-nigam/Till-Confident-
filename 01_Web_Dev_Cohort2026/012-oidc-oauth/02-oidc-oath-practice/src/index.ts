import crypto from "node:crypto";
import express from "express";
import path from "node:path";
import { eq } from "drizzle-orm"
import JWT from "jsonwebtoken"
import jose from "node-jose"
// import { db } 
// import { usersTable} 
import { PRIVATE_KEY, PUBLIC_KEY } from "./utils/cert";
import type { JWTClaims } from "./utils/user-token.ts"
import { db } from "./db";
import { applicationsTable, authCodesTable, usersTable } from "./db/schema";
// node: -> tell node.js that this is built in module and from node modules
//node-jose -> convert public key into JWKS format (needed for OIDC)

const app = express();
const PORT = process.env.PORT ?? 8080

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static((path.resolve("public"))))

app.use(async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader?.startsWith("Bearer ")) {
    return next();
  }

  const token = authHeader.slice(7);

  try {
    const claims = JWT.verify(token, PUBLIC_KEY, {
      algorithms: ["RS256"]
    }) as JWTClaims;

    req.user = claims; 
  } catch {
    // ignore invalid token
  }

  next();
});


app.get("/", (req, res) => res.json({ message: "Hello from Auth user" }))

app.get("/health", (req, res) =>
    res.json({ message: "Server is healthy", healthy: true })
)

//OIDC endpoints

app.get("/.well-known/openid-configuration", (req, res) => {

    const ISSUER = `http://localhost:${PORT}`;
    return res.json({
        issuer: ISSUER,
        authorization_endpoint: `${ISSUER}/o/authenticate`,
        userinfo_endpoint: `${ISSUER}/o/userinfo`,
        jwks_uri: `${ISSUER}/.well-known.jwks.json`
    })
})

app.get("/.well-known/jwks.json", async (_, res) => {
    const key = await jose.JWK.asKey(PUBLIC_KEY, "pem");
    return res.json({ keys: [key.toJSON()] })
})

app.get("/o/authenticate", (req, res) => {
    return res.sendFile(path.resolve("public", "authenticate.html"))
})

app.post("/o/authenticate/sign-in", async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        res.status(400).json({ message: "Email and password are required" })
        return;
    }

    const [user] = await db
        .select()
        .from(usersTable)
        .where(eq(usersTable.email, email))
        .limit(1)

    if (!user || !user.password || !user.salt) {
        res.status(401).json({ message: "Invalid email or password" })
        return;
    }

    const hash = crypto
        .createHash("sha256")
        .update(password + user.salt)
        .digest("hex")

    if (hash !== user.password) {
        return res.status(401).json({ message: "Invalid email or password" })
    }

    const ISSUER = `http://localhost:${PORT}`
    const now = Math.floor(Date.now() / 1000)

    const claims: JWTClaims = {
        iss: ISSUER,
        sub: user.id,
        email: user.email,
        email_verified: String(user.emailVerified),
        exp: now + 3600,
        given_name: user.firstName ?? "",
        family_name: user.lastName ?? undefined,
        name: [user.firstName, user.lastName].filter(Boolean).join(" "),
        picture: user.profileImageURL ?? undefined,
    }

    const token = JWT.sign(claims, PRIVATE_KEY, { algorithm: "RS256" });

    res.json({ token })

});

app.post("/o/authenticate/sign-up", async (req, res) => {
    const { email, lastName, firstName, password } = req.body;

    if (!email || !password || !firstName) {
        return res.status(400).json({ message: "First name, email ans password are required" })
    }

    const [existing] = await db
        .select({ id: usersTable.id })
        .from(usersTable)
        .where(eq(usersTable.email, email))
        .limit(1)

    if (existing) {
        return res
            .status(409)
            .json({ message: "An account with this email already exists" })
    }

    const salt = crypto.randomBytes(16).toString("hex");
    const hash = crypto
        .createHash("sha256")
        .update(password + salt)
        .digest("hex");


    await db.insert(usersTable).values({
        firstName,
        lastName: lastName ?? null,
        email,
        password: hash,
        salt,
    });

    return res.status(201).json({ ok: true })
});

app.get("/o/userinfo", async (req, res) => {
    const authHeader = req.headers.authorization;

    if (!authHeader?.startsWith("Bearer ")) {
        return res
            .status(401)
            .json({ message: "Missing or invalid Authorization header." })
    }

    const token = authHeader.slice(7);

    let claims: JWTClaims;
    try {
        claims = JWT.verify(token, PUBLIC_KEY, {
            algorithms: ["RS256"]
        }) as JWTClaims
    } catch {
        return res
            .status(401)
            .json({ message: "Invalid or expired token." })
    }

    const [user] = await db
        .select()
        .from(usersTable)
        .where(eq(usersTable.id, claims.sub))
        .limit(1)

    if (!user) {
        res.status(404).json({ message: "User not found." });
        return;
    }


    res.json({
        sub: user.id,
        email: user.email,
        email_verified: user.emailVerified,
        given_name: user.firstName,
        family_Name: user.lastName,
        name: [user.firstName, user.lastName].filter(Boolean).join(" "),
        picture: user.profileImageURL,

    });
})


app.post("/o/admin/application", async (req, res) => {
    const { name, redirectUri } = req.body;

    if (!name || !redirectUri) {
        return res.status(400).json({ message: "Missing fields" });
    }

    const clientId = crypto.randomBytes(16).toString("hex");
    const clientSecret = crypto.randomBytes(32).toString("hex");

    await db.insert(applicationsTable).values({
        name,
        clientId,
        clientSecret,
        redirectUri
    });

    res.json({ clientId, clientSecret });
});


// entry point --- OAuth
app.get("/o/authorize", async (req, res) => {
    
  const { client_id, redirect_uri } = req.query;

  // 1. Validate query params
  if (typeof client_id !== "string" || typeof redirect_uri !== "string") {
    return res.status(400).json({ message: "Invalid query params" });
  }

  // 2. Validate client
  const [appData] = await db
    .select()
    .from(applicationsTable)
    .where(eq(applicationsTable.clientId, client_id))
    .limit(1);

  if (!appData || appData.redirectUri !== redirect_uri) {
    return res.status(400).json({ message: "Invalid client" });
  }

  // 3. Check if user logged in
  const user = req.user;

  if (!user) {
    return res.redirect(
      `/o/authenticate?client_id=${encodeURIComponent(client_id)}&redirect_uri=${encodeURIComponent(redirect_uri)}`
    );
  }

  // 4. Show consent screen
  return res.send(`
    <h1>Continue to ${appData.name}?</h1>
    <form method="POST" action="/o/authorize/confirm">
      <input type="hidden" name="client_id" value="${client_id}" />
      <input type="hidden" name="redirect_uri" value="${redirect_uri}" />
      <button type="submit">Allow</button>
    </form>
  `);
});



app.post("/o/authorize/confirm", async (req, res) => {
  const { client_id, redirect_uri } = req.body;

  const user = req.user;

  if (!user) {
    return res.status(401).json({ message: "Not logged in" });
}

  const code = crypto.randomBytes(16).toString("hex");

  await db.insert(authCodesTable).values({
    code,
    clientId: client_id,
    userId: user.sub,   // sub - subject 
    expiresAt: new Date(Date.now() + 60 * 1000) // 1 min
  });

  return res.redirect(`${redirect_uri}?code=${code}`);
});

app.post("/o/token", async (req, res) => {
  const { code, client_id, client_secret } = req.body;

  //1. validate 
const [appData] = await db
  .select()
  .from(applicationsTable)
  .where(eq(applicationsTable.clientId, client_id))
  .limit(1);

if (!appData) {
  return res.status(400).json({ message: "Invalid client" });
}
  // 2. Validate code
  const [authCode] = await db
    .select()
    .from(authCodesTable)
    .where(eq(authCodesTable.code, code))
    .limit(1);

  if (!authCode) {
    return res.status(400).json({ message: "Invalid code" });
  }

  if (authCode.clientId !== client_id) {
    return res.status(400).json({ message: "Code does not belong to client" });
}

  if (authCode.expiresAt < new Date()) {
    return res.status(400).json({ message: "Code expired" });
  }

  // 3. Delete code (IMPORTANT)
  await db.delete(authCodesTable)
    .where(eq(authCodesTable.code, code));

  // 4. Get user
  const [user] = await db
    .select()
    .from(usersTable)
    .where(eq(usersTable.id, authCode.userId))
    .limit(1);

  // 5. Create tokens
  const now = Math.floor(Date.now() / 1000);

  const idToken = JWT.sign({
    sub: user.id,
    email: user.email,
    iss: `http://localhost:8080`,
    exp: now + 3600
  }, PRIVATE_KEY, { algorithm: "RS256" });

  const accessToken = JWT.sign({
    sub: user.id,
    scope: "basic"
  }, PRIVATE_KEY, { algorithm: "RS256" });

  return res.json({
    access_token: accessToken,
    id_token: idToken,
    token_type: "Bearer"
  });
});

app.listen(PORT, () => {
    console.log(`AuthServer is running on PORT ${PORT}`);
})

