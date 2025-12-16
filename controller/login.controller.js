import db from "../config/db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// REGISTER
export async function register(req, res) {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({
      message: "All fields are required",
      success: false,
    });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    db.query(
      "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
      [name, email, hashedPassword],

      (err) => {
        if (err) {
          // console.log("DB Error:", err); 
          return res.status(500).json({
            message: "Database error",
            success: false,
            error: err,
          });
        }

        return res.status(200).json({
          message: "Registered Successfully",
          success: true,
        });
      }
    );
  } catch (error) {
    console.log("REGISTER ERROR:", error);

    return res.status(500).json({
      message: "server error",
      error,
    });
  }
}


// LOGIN
export async function login(req, res) {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      message: "email and password required",
    });
  }

  db.query(
    "SELECT * FROM users WHERE email=?",
    [email],
    async (err, result) => {
      if (err)
        return res.status(500).json({
          message: "database error",
        });

      if (result.length === 0)
        return res.status(404).json({
          message: "User not found",
        });

      const user = result[0];

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(401).json({
          message: "wrong password",
        });
      }

      // token generate

      const userData = {
        email,
      };

      const token = jwt.sign({ userData }, process.env.SECRET_KEY, {
        expiresIn: "1h",
      });

      
      return res.status(200).json({
        message: "login successful",
        success: true,
        token,
        user,
      });
    }
  );
}
