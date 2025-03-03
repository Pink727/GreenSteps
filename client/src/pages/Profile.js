import React, { useState, useEffect } from 'react';
import './Profile.css';

const Profile = () => {
    const [username, setUsername] = useState('');
    const [points, setPoints] = useState(0);

    useEffect(() => {
        // Fetch user data from an API or local storage
        const fetchUserData = async () => {
            const userData = await fetch('/api/user').then(res => res.json());
            setUsername(userData.username);
            setPoints(userData.points);
        };

        fetchUserData();
    }, []);

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePointsChange = (e) => {
        setPoints(e.target.value);
    };

    const handleSave = () => {
        const updatedUserData = { username, points };
        fetch('/api/user', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedUserData),
        });
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Profile</h1>
            <div>
                <label>
                    Username:
                    <input type="text" value={username} onChange={handleUsernameChange} />
                </label>
            </div>
            <div>
                <label>
                    Points:
                    <input type="number" value={points} onChange={handlePointsChange} />
                </label>
            </div>
            <button onClick={handleSave}>Save</button>
        </div>
    );
};

export default Profile;