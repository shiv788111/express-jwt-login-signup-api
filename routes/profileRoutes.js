import express from "express";
import { verifyToken } from "../middleware/authentication.js";
import { getProfile } from "../controller/profileController.js";

const router = express.Router();

/**
 * @swagger
 * /api/profile:
 *   get:
 *     summary: Get user profile
 *     tags:
 *       - User
 *     security:
 *       - BearerAuth: []      
 *     responses:
 *       200:
 *         description: Profile data
 */

router.get("/profile", verifyToken, getProfile);

export default router;
