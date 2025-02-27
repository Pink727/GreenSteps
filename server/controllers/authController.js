import { User } from '../models/User.js';
import { hashPassword, signToken } from '../utils/auth.js';

export const registerUser = async (req, res) => {
    try {
        const { username, password, email } = req.body;
        const hashedPassword = await hashPassword(password);
        const newUser = new User({ username, password: hashedPassword, email });
        await newUser.save();
        const token = signToken(newUser);
        res.status(201).json({ token });
    } catch (error) {
        res.status(500).json({ message: 'Error registering user', error });
    }
};