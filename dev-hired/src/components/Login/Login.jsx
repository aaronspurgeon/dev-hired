import React, { useState } from 'react'
import api from '../../utils/api'

function Login(props) {
    const [error, setError] = useState()
    const [data, setData] = useState({
        password: '',
        email: ''
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
            .post('/api/user/login', data)
            .then(result => {
                localStorage.setItem("token", result.data)
                console.log(result)
                props.history.push('/home')
            })
            .catch(err => {
                throw (err)
            })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input type="email" name='email' placeholder='Enter email' value={data.email} onChange={handleChange} />
                <label htmlFor="password">Password</label>
                <input type="password" name='password' placeholder='Enter password' value={data.password} onChange={handleChange} />

                <button type='submit'>Login</button>
            </form>
        </div>
    )
}

export default Login