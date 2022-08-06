import React from 'react';
import FavoriteCard from './FavoriteCard';
import '../styles/Favorites.css';
import PropTypes from 'prop-types';

const Favorites = ({ favorites, removeFavorite, isFavorited }) => {

    const favoriteCards = favorites.map(favoriteTeam => {
        return (
            <FavoriteCard 
                strTeamBadge={favoriteTeam.strTeamBadge}
                idTeam={favoriteTeam.idTeam}
                key={favoriteTeam.idTeam}
                removeFavorite={removeFavorite}
                isFavorited={isFavorited}
            />
        )
    })
        return (
            <div className='favorite-container'>
                { favoriteCards }
            </div>    
        )
}

export default Favorites;

Favorites.propTypes = {
    favorites: PropTypes.array,
    removeFavorite: PropTypes.func,
    isFavorited:PropTypes.bool
  };