import mongoose from "mongoose";

const clientSchema = new mongoose.Schema({
  client_id: { type: String, required: true, unique: true },
  client_secret: { type: String, required: true },
  redirect_uris: [{ type: String }],
  scope: [{ type: String }]
});

export const Client = mongoose.model("Client", clientSchema);