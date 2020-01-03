import React from 'react';
import Nav from '../Nav/Nav';
import "./Welcome.scss";
import people from '../../images/landing-people.svg';

function Welcome({ history }) {
    return (
        <>

            <div className="welcome">
                <div className="cta">
                    <h1>Organization made simple.</h1>
                    <h3>Your personal portal to make landing your next developer adventure a breeze.</h3>
                    <button>Get Started.</button>
                </div>

                <div className="hero-img">
                    <img src={people} alt="Two Coworkers pair programming." />
                </div>
            </div>
        </>

    )
}

export default Welcome;