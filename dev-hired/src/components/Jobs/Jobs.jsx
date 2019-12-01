import React, { useState, useEffect } from 'react';
import api from '../../utils/api'

function Jobs(props) {
    const [jobs, setJobs] = useState([])
    const [newJob, setNewJob] = useState({
        company: 'Google',
        title: 'Software Engineer'
    })
    useEffect(() => {
        api()
            .get('jobs')
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                throw (err)
            })
    }, [])

    // useEffect(() => {
    //     api()
    //         .post('/', newJob)
    //         .then(res => {
    //             console.log(res)
    //         })
    //         .catch(err => {
    //             throw (err)
    //         })
    // })
    return (
        <div>
            <h1>List of jobs applied to</h1>
            {jobs.map(job => (
                <p>{job}</p>
            )}

        </div>
    )
}

export default Jobs;