# Express MySQL JWT Authentication API

A secure and scalable authentication REST API built using **Node.js**, **Express.js**, and **MySQL**.  
This project implements **Signup, Login, JWT Token Generation, Authentication Middleware, Logout, Token Verification**, **Protected Dashboard Access**, and **API documentation using Swagger UI**.

---

## 🚀 Features

- User Signup (Register)
- User Login
- Password hashing using bcrypt
- JWT token generation
- Authentication & Authorization middleware
- Token verification API
- Logout functionality
- Protected dashboard route
- MySQL database integration
- Secure password handling
- RESTful API architecture
- 📄 **Interactive API documentation using Swagger UI**

---

## 🛠️ Tech Stack

- **Node.js**
- **Express.js**
- **MySQL**
- **JWT (JSON Web Token)**
- **bcrypt**
- **dotenv**
- **Swagger UI (API Documentation)**
- **Postman (API Testing)**

## 📂 Project Structure

LOGIN_API
│

├── config

│ └── db.js # MySQL database connection


├── controller

   ├── login.controller.js # Login & JWT token generation


 ├── logoutController.js # Logout logic


 └── profileController.js # Protected profile/dashboard

 
├── middleware

   └── authentication.js # JWT verification middleware


├── routes


  ├── loginRoutes.js # Login routes

 ├── logoutRoutes.js # Logout routes

 └── profileRoutes.js # Protected routes



├── .env # Environment variables

├── server.js # App entry point

├── package.json

└── node_modules

