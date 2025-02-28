import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '/Activity.css';
import React, { useState } from 'react';

const Activity: React.FC = () => {
    const [selectedActivity, setSelectedActivity] = useState<string | null>(null);
    const [description, setDescription] = useState<string>('');

    const handleActivityClick = (activity: string) => {
        setSelectedActivity(activity);
    };

    const handleDescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        if (event.target.value.length <= 500) {
            setDescription(event.target.value);
        }
    };

    const handleSubmit = () => {
        console.log(`Activity: ${selectedActivity}, Description: ${description}`);
        setSelectedActivity(null);
        setDescription('');
    };

    return (
        <main>
            {/*activity section*/}
            <section className="activity">
                <h1 className="activity-heading">Activity</h1>
                <p className="activity-paragraph">Here is all different ways you can contribute to bettering your planet!.</p>
            </section>
            <div className="Recycling">
                <button className="button" onClick={() => handleActivityClick('Recycling')}>Recycling</button>
                <p className="Describe">Description</p>
            </div>
            <div className="Gardening">
                <button className="button" onClick={() => handleActivityClick('Gardening')}>Gardening</button>
                <p className="Describe">Description</p>
            </div>
            <div className="Trash">
                <button className="button" onClick={() => handleActivityClick('Trash')}>Trash</button>
                <p className="Describe">Description</p>
            </div>
            <div className="Non-Electrics">
                <button className="button" onClick={() => handleActivityClick('Non-Electrics')}>Non-Electrics</button>
                <p className="Describe">Description</p>
            </div>
            <div className="Composing">
                <button className="button" onClick={() => handleActivityClick('Composing')}>Composing</button>
                <p className="Describe">Description</p>
            </div>

            {selectedActivity && (
                <div className="description-box">
                    <h2>{selectedActivity}</h2>
                    <textarea
                        value={description}
                        onChange={handleDescriptionChange}
                        placeholder="Write a description (max 500 characters)"
                    />
                    <button onClick={handleSubmit}>Submit</button>
                </div>
            )}

            <section>
                <h1 className="rewards-heading">Rewards</h1>
                <p>Look at all your rewards for the ____ !</p>
            </section>
        </main>
    );
};