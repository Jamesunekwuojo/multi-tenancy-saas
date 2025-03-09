import express from "express";
import { createTenant, getTenants } from "../controllers/tenantControllers.js";

/**
 * @swagger
 * /api/tenants:
 *   get:
 *     summary: Get all tenants
 *     responses:
 *       200:
 *         description: List of tenants
 *   post:
 *     summary: Create a new tenant
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
                 subdomain:type:string
 *                 example: Tenant Name
 *     responses:
 *       201:
 *         description: Tenant created
 */

const router = express.Router();
router.post("/", createTenant);
router.get("/", getTenants);

export default router;
