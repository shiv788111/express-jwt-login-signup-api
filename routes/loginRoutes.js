import { Router } from "express";
import { register, login } from "../controller/login.controller.js";

const router = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Users:
 *       type: object
 *       required:
 *         - name
 *         - email
 *         - password
 *       properties:
 *         name:
 *           type: string
 *           description: User full name
 *         email:
 *           type: string
 *           description: User email address
 *         password:
 *           type: string
 *           description: User password
 *
 *     LoginUser:
 *       type: object
 *       required:
 *         - email
 *         - password
 *       properties:
 *         email:
 *           type: string
 *           description: User email for login
 *         password:
 *           type: string
 *           description: User password for login
 */


/**
 * @swagger
 * /api/register:
 *   post:
 *     summary: Create account
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Users'
 *     responses:
 *       200:
 *         description: User registered successfully
 *       500:
 *         description: Something went wrong
 */
router.post("/register", register);


/**
 * @swagger
 * /api/login:
 *   post:
 *     summary: Login here
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/LoginUser'
 *     responses:
 *       200:
 *         description: Login successfully
 *       400:
 *         description: Invalid email or password
 *       500:
 *         description: Something went wrong
 */
router.post("/login", login);

export default router;
