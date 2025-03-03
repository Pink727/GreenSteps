export const setToken = (token) => {
    localStorage.setItem('token', token);
};

export const getToken = () => {
    return localStorage.getItem('token');
};

export const removeToken = () => {
    localStorage.removeItem('token');
};

// Middleware to bypass JWT token verification
export const verifyToken = (req, res, next) => {
    next(); // Simply call next() to bypass token verification
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

const auth = {
    verifyToken,
    hashPassword,
    comparePassword,
};

export default auth;