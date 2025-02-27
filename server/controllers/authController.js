import { User } from '../models/User.js';
import { hashPassword, signToken } from '../utils/auth.js';

export const registerUser = async (req, res) => {
    console.log('Register endpoint hit'); // Debugging: Log when the endpoint is hit
    try {
        const { username, password, email } = req.body;
        console.log('Request body:', req.body); // Debugging: Log the request body
        const hashedPassword = await hashPassword(password);
        const newUser = new User({ username, password: hashedPassword, email });
        await newUser.save();
        const token = signToken(newUser);
        res.status(201).json({ token });
    } catch (error) {
        console.error('Error registering user:', error); // Debugging: Log any errors
        res.status(500).json({ message: 'Error registering user', error });
    }
};