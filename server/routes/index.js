import { Router } from 'express';
import { registerUser } from '../controllers/authController.js'; // Corrected the import path

const router = Router();

router.post('/auth/register', registerUser);

export default router;