import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Activity.css';
import React, { useState } from 'react';

const Activity = () => {
    const [selectedActivity, setSelectedActivity] = useState(null);
    const [description, setDescription] = useState('');
    const [submittedDescription, setSubmittedDescription] = useState('');

    const handleActivityClick = (activity) => {
        setSelectedActivity(activity);
        setDescription('');
    };

    const handleDescriptionChange = (event) => {
        if (event.target.value.length <= 500) {
            setDescription(event.target.value);
        }
    };

    const handleSubmit = () => {
        setSubmittedDescription(description);
        setSelectedActivity(null);
    };

    return (
        <main>
            {/*activity section*/}
            <section className="activity">
                <h1 className="activity-heading">Activity</h1>
                <p className="activity-paragraph">Here are all the different ways you can contribute to bettering your planet!</p>
            </section>
            {['Recycling', 'Gardening', 'Trash', 'Non-Electrics', 'Composing'].map((activity) => (
                <div key={activity} className={activity}>
                    <button className="button" onClick={() => handleActivityClick(activity)}>{activity}</button>
                    {selectedActivity === activity && (
                        <div className="description-box">
                            <textarea
                                className="description-input"
                                value={description}
                                onChange={handleDescriptionChange}
                                placeholder="Write a description (max 500 characters)"
                            />
                            <button className="submit-button" onClick={handleSubmit}>Submit</button>
                        </div>
                    )}
                    {submittedDescription && <p className="Describe">{submittedDescription}</p>}
                </div>
            ))}
            <section>
                <h1 className="rewards-heading">Rewards</h1>
                <p>Look at all your rewards for the ____!</p>
            </section>
        </main>
    );
};

export default Activity;