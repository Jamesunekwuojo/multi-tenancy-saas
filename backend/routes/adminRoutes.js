import express from 'express';

import { createAdmin, loginAdmin } from '../controllers/adminController.js';

router = express.Router();

router.post('/signup', createAdmin);

router.get('/login', loginAdmin);

router.get('/admin/logout',)



export default router;