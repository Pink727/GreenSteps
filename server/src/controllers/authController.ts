import { Request, Response } from 'express';
import AuthService from '../services/authService'; // Corrected import

export class AuthController {
    private authService: typeof AuthService;

    constructor() {
        this.authService = AuthService;
    }

    public async registerUser(req: Request, res: Response): Promise<Response> {
        try {
            const user = await this.authService.registerUser(req.body.email, req.body.password);
            return res.status(201).json(user);
        } catch (error: any) { // Explicitly type the error
            return res.status(400).json({ message: error.message });
        }
    }

    public async loginUser(req: Request, res: Response): Promise<Response> {
        try {
            const token = await this.authService.loginUser(req.body.email, req.body.password);
            return res.status(200).json({ token });
        } catch (error: any) { // Explicitly type the error
            return res.status(401).json({ message: error.message });
        }
    }
}