import jwt from "jsonwebtoken";
import db from "../config/db.js";


export function verifyToken(req, res, next) {
  try {
    const header = req.headers.authorization;
    if (!header) return res.status(401).json({ message: "No token provided" });

    const token = header.split(" ")[1];



    // Check if token is blacklisted    //logout code
    db.query("SELECT * FROM token_blacklist WHERE token=?", [token], (err, result) => {
      if (err) return res.status(500).json({ message: "Login First...", error: err.message });

      if (result.length > 0) {
        return res.status(401).json({ message: "Token expired " });
      }
        // End

    
      jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
        if (err) return res.status(401).json({ message: "Invalid token" });

        req.user = decoded; 
        next();
      });
    });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
}
