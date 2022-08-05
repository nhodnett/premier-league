import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Card.css';
import emptyStar from '../assets/empty-star.png';
import filledStar from '../assets/filled-star.png';

const Card = ({ strTeamBadge, idTeam, handleClick, addFavorite, removeFavorite, isFavorited }) => {
    console.log('8', isFavorited)
    const addToFavorites = () => {
        if(!isFavorited) {
            isFavorited = true
            const favoritedTeam = {
                strTeamBadge: strTeamBadge,
                idTeam: idTeam,
                handleClick: handleClick,
                isFavorited: true
            }
        addFavorite(favoritedTeam)
    } else {
        isFavorited = false
        removeFavorite(idTeam)
    }
}

    return (
        <div className='card'>
            <div className='favorite-container'>
                <button className='star-button' onClick={() => addToFavorites()}>
                    {isFavorited ? <img src={filledStar} className='favorited-star' alt='filled star'></img> : <img src={emptyStar} className='star' alt='empty-star'></img>}
                </button>
            </div>
            <Link to={`/${idTeam}`}>
            <img 
                src={strTeamBadge} alt='teamBadge'
                // onClick={() => handleClick(idTeam)}
                />
            </Link>
        </div>
    )
}

export default Card