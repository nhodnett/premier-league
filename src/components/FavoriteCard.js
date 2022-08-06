import React from 'react';
import filledStar from '../assets/filled-star.png';
import '../styles/FavoriteCard.css';
import PropTypes from 'prop-types';

const FavoriteCard = ({ strTeamBadge, idTeam, removeFavorite }) => {

    // console.log(idTeam)
    return (
        <div className='card'>
            <div className='favorite-container'>
                <button className='star-button' onClick={() => removeFavorite(idTeam)}>
                    <img src={filledStar} className='favorited-star' alt='filled star'></img> 
                </button>
            </div>
            <img src={strTeamBadge} alt='teamBadge'/>
        </div>
    )
}

export default FavoriteCard;

FavoriteCard.propTypes = {
    strTeamBadge: PropTypes.string,
    idTeam: PropTypes.string,
    removeFavorite: PropTypes.func
}

