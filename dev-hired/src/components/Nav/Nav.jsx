import React from 'react';
import './Nav.scss';
import app from '../../base';


function Nav() {
    // <button onClick={() => app.auth().signOut()}>Sign Out</button>
    return (
        <nav>
            <div>
                <h3>Dev Hired</h3>
            </div>

            <div>
                <ul>
                    <li>Home</li>
                    <li>Register</li>
                    <li>Login</li>
                    <button onClick={() => app.auth().signOut()}>Sign Out</button>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;