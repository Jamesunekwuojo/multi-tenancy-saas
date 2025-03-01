import express from 'express';
import { createData, getData } from '../controllers/dataController';

import { resolveTenant } from '../middleware/tenantMiddleware';


const router = express.Router();

router.use(resolveTenant);
router.post('/', createData);
router.get('/', getData);

export default router;