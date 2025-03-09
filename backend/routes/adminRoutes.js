import express from 'express';

import { createAdmin, loginAdmin } from '../controllers/adminController.js';

import {resolveAdmin} from '../middleware/resolveAdmin.js';



router = express.Router();

router.post('/signup', createAdmin);

router.get('/login', resolveAdmin, loginAdmin);

router.get('/admin/logout',)



export default router;