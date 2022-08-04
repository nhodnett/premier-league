import React from 'react';
import '../styles/Card.css';

const Card = ({ strTeamBadge, idTeam, handleClick }) => {

    return (
        <div className='card'>
            <img 
                src={strTeamBadge} alt='teamBadge'
                onClick={() => handleClick(idTeam)}
            />
        </div>
    )
}

export default Card