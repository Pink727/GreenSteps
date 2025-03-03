import { Request, Response } from 'express';
import authService from '../services/authService';

const registerUser = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { username, email, password } = req.body;
        console.log('Received registration data:', req.body); // Log the received data
        if (!username || !email || !password) {
            throw new Error('Missing required fields');
        }
        const token = await authService.registerUser(username, email, password);
        return res.status(201).json({ token, user: { username, email, password } });
    } catch (error: any) {
        console.error('Error in registerUser:', error.message);
        return res.status(400).json({ message: error.message });
    }
};

const loginUser = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { email, password } = req.body;
        console.log('Received login data:', req.body); // Log the received data
        if (!email || !password) {
            throw new Error('Missing required fields');
        }
        const token = await authService.loginUser(email, password);
        return res.status(200).json({ token });
    } catch (error: any) {
        console.error('Error in loginUser:', error.message);
        return res.status(400).json({ message: error.message });
    }
};

export default { registerUser, loginUser };