import React, { useState } from 'react';

const Profile = () => {
    const [ecoHabit, setEcoHabit] = useState('');

    const handleChange = (event) => {
        setEcoHabit(event.target.value);
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        // Add logic to save ecoHabit
    };

    return (
        <div>
            <h2>Profile</h2>
            <form onSubmit={handleFormSubmit}>
                <input
                    name="ecoHabit"
                    type="text"
                    placeholder="Enter eco-friendly habit"
                    value={ecoHabit}
                    onChange={handleChange}
                />
                <button type="submit">Add Habit</button>
            </form>
        </div>
    );
};

export default Profile;