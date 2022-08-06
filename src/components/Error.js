import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Error.css';

const Error = () => {
    return (
        <div className='error'>
            <Link to='/'>
                <h2 className='error-message'>Error loading page, please refresh and try again...</h2>
            </Link>
        </div>
    )
}

export default Error;