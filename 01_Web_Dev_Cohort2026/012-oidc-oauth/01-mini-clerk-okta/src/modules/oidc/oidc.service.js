

// oidc.service.js
export const getJWKSService = () => {
  return {
    keys: [
      {
        kty: "RSA",
        use: "sig",
        kid: "123",
        alg: "RS256",
        n: "PUBLIC_KEY_N",
        e: "AQAB"
      }
    ]
  };
};



import jwt from "jsonwebtoken";

export const exchangeCodeForToken = async (code) => {

  const payload = { sub: "user123", email: "test@test.com" };

  const access_token = jwt.sign(payload, "secret", { expiresIn: "1h" });
  const id_token = jwt.sign(payload, "secret", { expiresIn: "1h" });

  return {
    access_token,
    id_token,
    token_type: "Bearer",
    expires_in: 3600
  };
};