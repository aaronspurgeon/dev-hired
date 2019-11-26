import React, { useState } from 'react'
import api from '../../utils/api';

function Register(props) {
    const [error, setError] = useState();
    const [data, setData] = useState({
        email: '',
        password: '',
        name: ''
    })

    const handleChange = e => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()

        api()
            .post('/api/user/register', data)
            .then(res => {
                setData({
                    email: '',
                    password: '',
                    name: ''
                })
            })
            .catch(err => {
                throw (err)
            })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input type="email" name='email' placeholder='Enter an email' value={data.email} onChange={handleChange} />
                <label htmlFor="password">Password</label>
                <input type="password" name='password' placeholder='Enter a password' value={data.password} onChange={handleChange} />
                <label htmlFor="email">Name</label>
                <input type="name" name='name' placeholder='Enter your name' value={data.name} onChange={handleChange} />

                <button type='submit'>Register</button>
            </form>
        </div>
    )
}

export default Register;