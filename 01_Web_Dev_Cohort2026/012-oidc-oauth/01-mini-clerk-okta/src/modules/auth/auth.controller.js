import { registerUser, loginUser } from "./auth.service.js";

export const register = async (req, res) => {
  try {
    const user = await registerUser(req.body);
    res.status(201).json({ success: true, user });
    console.log("user registered ------------ ", user)
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const login = async (req, res) => {
  try {
    const data = await loginUser(req.body);
    res.json({ success: true, ...data });
        console.log("user logged in -------- ", data)
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};