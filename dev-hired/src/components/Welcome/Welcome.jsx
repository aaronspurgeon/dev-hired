import React from 'react';
import Login from '../Login/Login';
import Register from '../Register/Register';

function Welcome({ history }) {
    return (
        <div>
            <h1>Dev Hired</h1>
            <h3>Your personal portal to organize all the jobs that you applied for</h3>
            <Login history={history} />
            <Register />
        </div>
    )
}

export default Welcome;