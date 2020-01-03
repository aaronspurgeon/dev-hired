import React, { useState, useCallback } from 'react'
// import api from '../../utils/api';
import { withRouter } from 'react-router';
import app from '../../base'

function Register({ history }) {
    const handleRegister = useCallback(async event => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        try {
            await app
                .auth()
                .createUserWithEmailAndPassword(email.value, password.value);
            history.push("/home");
        } catch (err) {
            alert(err);
        }
    }, [history]);


    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleRegister}>
                <label htmlFor="email">Email</label>
                <input type="email" name='email' placeholder='Enter an email' />
                <label htmlFor="password">Password</label>
                <input type="password" name='password' placeholder='Enter a password' />
                <button type='submit'>Register</button>
            </form>
        </div>
    )
}

export default withRouter(Register);