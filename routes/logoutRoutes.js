import express from "express";
import { logout } from "../controller/logoutController.js";
import { verifyToken } from "../middleware/authentication.js";

const router = express.Router();

/**
 * @swagger
 * /api/logout:
 *   get:
 *     summary: Logout user 
 *     description: This API logs out the user by adding their JWT token to the blacklist. After logout, the same token cannot be used again.
 *     tags:
 *       - Auth
 *     security:
 *       - BearerAuth: []      
 *     responses:
 *       200:
 *         description: User logged out successfully
 *       401:
 *         description: Invalid or expired token
 *       500:
 *         description: Server error
 */
router.get("/logout", verifyToken, logout);

export default router;
