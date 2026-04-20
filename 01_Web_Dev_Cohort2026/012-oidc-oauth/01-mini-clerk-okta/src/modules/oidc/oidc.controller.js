import { Client } from "./oidc.model.js";
import crypto from "crypto";

export const wellKnown = (req, res) => {
const baseUrl = `${req.protocol}://${req.get("host")}`;

 return res.json({
    issuer: baseUrl,

    authorization_endpoint: `${baseUrl}/oidc/auth`,
    token_endpoint: `${baseUrl}/oidc/token`,
    userinfo_endpoint: `${baseUrl}/oidc/userinfo`,
    jwks_uri: `${baseUrl}/oidc/jwks`,

    response_types_supported: ["code"],
    subject_types_supported: ["public"],

    id_token_signing_alg_values_supported: ["RS256"],
    token_endpoint_auth_methods_supported: ["client_secret_post"],
  });
};






export const registerClient = async (req, res) => {
  const client_id = crypto.randomBytes(16).toString("hex");
  const client_secret = crypto.randomBytes(32).toString("hex");

  const client = await Client.create({
    client_id,
    client_secret,
    redirect_uris: req.body.redirect_uris,
    grant_types: ["authorization_code"],
  });

  res.json(client);
};

export const getJWKS = (req, res) => {
  const keys = getJWKSService();
  res.json(keys);
};

export const authorize = async (req, res) => {
  const { client_id, redirect_uri } = req.query;

  const code = await generateAuthCode(client_id);

  return res.redirect(`${redirect_uri}?code=${code}`);
};

export const token = async (req, res) => {
  const { code } = req.body;

  const tokens = await exchangeCodeForToken(code);

  res.json(tokens);
};

export const userInfo = (req, res) => {
  const user = req.user; // from auth middleware

  res.json({
    sub: user.id,
    email: user.email
  });
};