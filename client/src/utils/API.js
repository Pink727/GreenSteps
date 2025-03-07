import axios from 'axios';

const API_URL = 'https://greensteps-u62w.onrender.com/api'; 

export const getUserHabits = async (userId) => {
    try {
        const response = await axios.get(`${API_URL}/habits/${userId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching user habits:', error);
        throw error;
    }
};

export const addUserHabit = async (userId, habitData) => {
    try {
        const response = await axios.post(`${API_URL}/habits/${userId}`, habitData);
        return response.data;
    } catch (error) {
        console.error('Error adding user habit:', error);
        throw error;
    }
};

export const updateUserHabit = async (userId, habitId, habitData) => {
    try {
        const response = await axios.put(`${API_URL}/habits/${userId}/${habitId}`, habitData);
        return response.data;
    } catch (error) {
        console.error('Error updating user habit:', error);
        throw error;
    }
};

export const deleteUserHabit = async (userId, habitId) => {
    try {
        const response = await axios.delete(`${API_URL}/habits/${userId}/${habitId}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting user habit:', error);
        throw error;
    }
};

export const authenticateUser = async (credentials) => {
    try {
        console.log('Authenticating user with credentials:', credentials); // Debugging: Log the credentials being sent
        const response = await axios.post(`${API_URL}/auth/login`, credentials);
        console.log('Authentication response:', response); // Debugging: Log the response from the server
        return response.data;
    } catch (error) {
        console.error('Error authenticating user:', error);
        throw error;
    }
};

export const registerUser = async (userData) => {
    try {
        console.log('Registering user with data:', userData); // Debugging: Log the user data being sent
        const response = await axios.post(`${API_URL}/auth/register`, userData);
        console.log('Registration response:', response); // Debugging: Log the response from the server
        return response.data;
    } catch (error) {
        if (error.response) {
            console.error('Error response data:', error.response.data); // Debugging: Log the error response data
            console.error('Error response status:', error.response.status); // Debugging: Log the error response status
            console.error('Error response headers:', error.response.headers); // Debugging: Log the error response headers
        } else if (error.request) {
            console.error('Error request:', error.request); // Debugging: Log the error request
        } else {
            console.error('Error message:', error.message); // Debugging: Log the error message
        }
        console.error('Error config:', error.config); // Debugging: Log the error config
        throw error;
    }
};