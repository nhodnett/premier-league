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
            <article className='intro'>
                Have you made a terrible decision? Is your team inflicting misery on you week in and week out? 
                No problem! Just click the star on the card or cards below to remove that team from your favorites.
            </article>
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