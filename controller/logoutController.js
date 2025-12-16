import db from "../config/db.js";

export const logout = (req, res) => {
  const header = req.headers.authorization;
  if (!header) {
    return res.status(401).json({
      message: "Token missing",
    });
  }

  const token = header.split(" ")[1];

  db.query("INSERT INTO token_blacklist (token) VALUES (?)", [token]);

  // Remove refresh token
  db.query("UPDATE users SET refresh_token=NULL WHERE id=?", [req.user.id]);

  res.json({ message: "Logged out successfully" });
};
