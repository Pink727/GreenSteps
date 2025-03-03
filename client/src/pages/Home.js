import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    const handleContactUs = () => {
        window.location.href = 'mailto:support@greensteps.com';
    };

    return (
        <div className="home">
            <header>
                <nav>
                    <ul>
                        <li><Link to="/activity">Activity</Link></li>
                        <li><Link to="/rewards">Rewards</Link></li>
                        <li><Link to="/login">Login</Link></li>
                    </ul>
                </nav>
            </header>
            <div className="image-placeholder">
                {/* Image will go here */}
            </div>
            <div className="gps">
                {/* GPS component will go here */}
            </div>
            <div className="contact-us" style={{ position: 'absolute', bottom: 0, left: 0 }}>
                <button onClick={handleContactUs}>Contact Us</button>
            </div>
        </div>
    );
};

export default Home;