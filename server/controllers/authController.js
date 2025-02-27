import { User } from '../models/User.js';
import { hashPassword } from '../utils/auth.js'; // Removed signToken import

export const registerUser = async (req, res) => {
    console.log('Register endpoint hit'); // Debugging: Log when the endpoint is hit
    try {
        const { username, password, email } = req.body;
        console.log('Request body:', req.body); // Debugging: Log the request body
        if (!username || !password || !email) {
            return res.status(400).json({ message: 'Missing required fields' });
        }
        const hashedPassword = await hashPassword(password);
        const newUser = new User({ username, password: hashedPassword, email });
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' }); // Removed token from response
    } catch (error) {
        console.error('Error registering user:', error); // Debugging: Log any errors
        res.status(500).json({ message: 'Error registering user', error });
    }
};