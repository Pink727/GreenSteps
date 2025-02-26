// filepath: /GreenSteps/GreenSteps/client/src/utils/API.js

import axios from 'axios';

const API_URL = '/api'; // Adjust this to your server's URL if needed

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
        const response = await axios.post(`${API_URL}/auth/login`, credentials);
        return response.data;
    } catch (error) {
        console.error('Error authenticating user:', error);
        throw error;
    }
};

export const registerUser = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/auth/register`, userData);
        return response.data;
    } catch (error) {
        console.error('Error registering user:', error);
        throw error;
    }
};