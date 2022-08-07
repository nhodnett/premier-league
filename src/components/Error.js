import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Error.css';

const Error = () => {
    return (
        <div className='error'>
            <Link to='/'>
                <h2 className='error-message-h2'>OFFSIDE!</h2>
                <h3 className='error-message-h3'>Sorry, there was an error loading the page. Please click this link, or refresh to try again...</h3>
            </Link>
        </div>
    )
}

export default Error;