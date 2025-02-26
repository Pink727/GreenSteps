import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Profile from '../pages/Profile';
import ErrorPage from '../pages/ErrorPage';
import Register from '../pages/Register';
import Navbar from './Navbar';

const App = () => {
    return (
        <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/Errorpage" element={<ErrorPage />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;