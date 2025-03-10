import express from 'express';

import { createAdmin, loginAdmin } from '../controllers/adminController.js';

import resolveAdmin from '../middleware/resolveAdmin.js';



const router = express.Router();

router.post('/signup', createAdmin);

router.get('/login', resolveAdmin, loginAdmin);

router.get('/admin/logout', )



export default router;