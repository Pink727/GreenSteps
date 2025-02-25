import React from 'react';
import { Link } from 'react-router-dom';
import '/Activity.css';

const Activity: React.FC = () => {
    return (
        <main>
            {/*activity section*/}
            <section className="activity">
            <h1 className="activity-heading"> Activity</h1>
            <p className="activity-paragraph"> Here is all different ways you can contribute to bettering your planet!.</p>
            </section>
            <div className="Recycling">
            <button class="button"> Recycling</button>
            <p className="Describe"> Description</p>
            </div>
            <div className="Gardening">
            <button class="button"> Gardening</button>
            <p className="Describe"> Description</p>
            </div>
            <div className="Trash">
            <button class="button"> Trash</button> 
            <p className="Describe"> Description</p>
            </div>
            <div className="Non-Electrics">
            <button class="button"> Non-Electrics</button>
            <p className="Describe"> Description</p>
            </div>
            <div className="Composing">
            <button class="button"> Composing</button>
            <p className="Describe"> Description</p>
            </div>

            <section>
                <h1 className="rewards-heading">Rewards</h1>
                <p>Look at all your rewards for the ____ !</p>
            </section>
        </main>

    );
};