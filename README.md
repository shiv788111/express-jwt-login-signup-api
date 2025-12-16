# Express MySQL JWT Authentication API

A secure and scalable authentication REST API built using **Node.js**, **Express.js**, and **MySQL**.  
This project implements **Signup, Login, JWT Token Generation, Authentication Middleware, Logout, Token Verification**, and **Protected Dashboard Access**.

---

## 🚀 Features

- User Signup (Register)
- User Login
- password Hashing using bcrypt
- JWT Token Generation
- Authentication & Authorization Middleware
- Token Verification API
- Logout Functionality
- Protected Dashboard Route
- MySQL Database Integration
- Secure Password Handling
- RESTful API Architecture

---

## 🛠️ Tech Stack

- **Node.js**
- **Express.js**
- **MySQL**
- **JWT (JSON Web Token)**
- **bcrypt**
- **dotenv**
- **Postman (API Testing)**

---

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

