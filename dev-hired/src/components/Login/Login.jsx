import React, { useContext, useCallback } from 'react';
import { withRouter, Redirect } from 'react-router';
import app from '../../base';
import { AuthContext } from '../../Auth';


function Login({ history }) {
    const handleLogin = useCallback(
        async e => {
            e.preventDefault();
            const { email, password } = e.target.elements;
            try {
                await app
                    .auth()
                    .signInWithEmailAndPassword(email.value, password.value);
                history.pushState('/home');
            } catch (err) {
                alert(err)
            }
        },
        [history]
    );

    const { currentUser } = useContext(AuthContext);

    if (currentUser) {
        return <Redirect to='/home' />
    }


    return (
        <div>
            <form onSubmit={handleLogin}>
                <label htmlFor="email">Email</label>
                <input type="email" name='email' placeholder='Enter email' />
                <label htmlFor="password">Password</label>
                <input type="password" name='password' placeholder='Enter password' />

                <button type='submit'>Login</button>
            </form>
        </div>
    )
}

export default withRouter(Login);