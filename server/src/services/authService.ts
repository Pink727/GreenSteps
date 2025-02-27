import { User } from '../models/userModel';
import jwt from 'jsonwebtoken';

class AuthService {
    private jwtSecret: string;

    constructor() {
        this.jwtSecret = process.env.JWT_SECRET || 'your_jwt_secret'; // Replace with your secret
    }

    public async registerUser(email: string, password: string) {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            throw new Error('User already exists');
        }

        const user = new User({ email, password });
        await user.save();
        return this.generateToken(user);
    }

    public async loginUser(email: string, password: string) {
        const user = await User.findOne({ email });
        if (!user || !(await user.comparePassword(password))) {
            throw new Error('Invalid credentials');
        }
        return this.generateToken(user);
    }

    private generateToken(user: any) {
        const payload = { id: user._id, email: user.email };
        return jwt.sign(payload, this.jwtSecret, { expiresIn: '1h' });
    }

    public verifyToken(token: string) {
        try {
            return jwt.verify(token, this.jwtSecret);
        } catch (error) {
            throw new Error('Invalid token');
        }
    }
}

export default new AuthService();