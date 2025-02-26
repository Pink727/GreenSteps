import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';

dotenv.config();

const secret = process.env.JWT_SECRET;

// Function to generate a JWT token
export const signToken = (user) => {
    const payload = { username: user.username, id: user._id };
    return jwt.sign(payload, secret, { expiresIn: '2h' });
};

// Middleware to verify JWT token
export const verifyToken = (req, res, next) => {
    const token = req.headers.authorization || '';
    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }
    try {
        const decoded = jwt.verify(token, secret);
        req.user = decoded;
        next();
    } catch (err) {
        return res.status(401).json({ message: 'Invalid token' });
    }
};

// Function to hash a password
export const hashPassword = async (password) => {
    const saltRounds = 10;
    return await bcrypt.hash(password, saltRounds);
};

// Function to compare a password with a hashed password
export const comparePassword = async (password, hashedPassword) => {
    return await bcrypt.compare(password, hashedPassword);
};

// Function to get user from token
export const getUserFromToken = (token) => {
    try {
        return jwt.verify(token, secret);
    } catch (err) {
        return null;
    }
};

const auth = {
    signToken,
    verifyToken,
    hashPassword,
    comparePassword,
    getUserFromToken,
};

export default auth;