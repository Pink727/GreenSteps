import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    const handleContactUs = () => {
        window.location.href = 'mailto:support@greensteps.com';
    };

    return (
        <div className="home">
            <div className="image-placeholder">
                <img src="https://images.unsplash.com/photo-1497321697169-1ca9f1c8a253?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Placeholder" />
            </div>
            <div className="home-content">
                <h1>Welcome to GreenSteps</h1>
                <p>Your one-stop shop for all things eco-friendly.</p>
              </div>
            <div className="contact-us" style={{ position: 'absolute', bottom: 0, left: 0 }}>
                <button onClick={handleContactUs}>Contact Us</button>
            </div>
        </div>
    );
};

export default Home;