import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Card.css';
import emptyStar from '../assets/empty-star.png';
import filledStar from '../assets/filled-star.png';

const Card = ({ strTeamBadge, idTeam, handleClick, addFavorite, removeFavorite, isFavorited }) => {
  
    const addToFavorites = (idTeam) => {
        if (!isFavorited) {
            isFavorited = true
            const favoritedTeam = {
                strTeamBadge: strTeamBadge,
                idTeam: idTeam,
                handleClick: handleClick,
                isFavorited: isFavorited
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

                <button className='star-button' onClick={() => addToFavorites(idTeam)}>
                    {isFavorited ? <img src={filledStar} className='favorited-star' alt='filled star'></img> : <img src={emptyStar} className='star' alt='empty-star'></img>}
                </button>
            </div>
            <Link to={`/${idTeam}`}>
                <img src={strTeamBadge} alt='teamBadge'/>
            </Link>
        </div>
    )
}

export default Card