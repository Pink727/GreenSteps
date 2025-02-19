const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const secret = 'your_jwt_secret'; // Replace with your actual secret

// Function to generate a JWT token
const signToken = (user) => {
    const payload = { username: user.username, id: user._id };
    return jwt.sign(payload, secret, { expiresIn: '2h' });
};

// Function to hash a password
const hashPassword = async (password) => {
    const saltRounds = 10;
    return await bcrypt.hash(password, saltRounds);
};

// Function to compare a password with a hashed password
const comparePassword = async (password, hashedPassword) => {
    return await bcrypt.compare(password, hashedPassword);
};

module.exports = {
    signToken,
    hashPassword,
    comparePassword,
};