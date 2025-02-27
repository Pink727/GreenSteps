import { Router } from 'express';
import { registerUser } from '../controllers/authController';

const router = Router();

router.post('/auth/register', registerUser);

export default router;