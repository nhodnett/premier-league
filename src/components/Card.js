import React from 'react';
import '../styles/Card.css';

const Card = ({ strTeamBadge }) => {

    return (
        <div className='card'>
            <img 
                src={strTeamBadge}
                alt='teamBadge'
            />
        </div>
    )
}

export default Card