import db from "./config/db.js";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import express from "express";
import loginRoutes from "./routes/loginRoutes.js";
import logoutRoutes from "./routes/logoutRoutes.js";
import dotenv from "dotenv";
import profileRoutes from "./routes/profileRoutes.js"

dotenv.config();

// Swagger Configuration
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "User Authentication API",
      description:
        "This API provides user registration and login functionality using Express.js, JWT authentication, and MySQL. Swagger documentation is included for easy testing and integration.",
      version: "1.0.0",
      contact: {
        name: "API Support",
        email: "shiv253598@gmail.com",
      },
    },
    servers: [
      {
        url: "http://localhost:1122",
        description: "Local Server",
      },
    ],

    //  ADD THIS PART  (Bearer Token Support)
    components: {
      securitySchemes: {
        BearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [
      {
        BearerAuth: [],
      },
    ],
    //  end 
  },

  apis: ["./routes/*.js"],
};

const spec = swaggerJSDoc(options);

const app = express();
const PORT = process.env.PORT || 3000;

// middleware
app.use(express.json());

// API Routes
app.use("/api", loginRoutes);

app.use("/api", profileRoutes);
app.use("/api", logoutRoutes);

// Swagger Docs
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(spec));

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
  console.log(`Swagger Docs → http://localhost:${PORT}/api-docs`);
});
