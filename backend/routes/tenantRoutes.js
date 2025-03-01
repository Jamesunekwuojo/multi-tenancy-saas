import express from 'express';
import { createTenant, getTenants } from '../controllers/tenantController';




const router = express.Router();
router.post('/', createTenant);
router.get('/', getTenants);

export default router