import React from 'react';
import './Profile.css';

interface ProfileProps {
    username: string;
    profilePicture: string;
    points: number;
}

const Profile: React.FC<ProfileProps> = ({ username, profilePicture, points }) => {
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <img 
                src={profilePicture} 
                alt={`${username}'s profile`} 
                style={{ borderRadius: '50%', width: '150px', height: '150px' }} 
            />
            <h1>{username}</h1>
            <p>Points: {points}</p>
        </div>
    );
};

export default Profile;