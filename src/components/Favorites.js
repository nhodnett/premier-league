import React from 'react';
import FavoriteCard from './FavoriteCard';
import '../styles/Favorites.css';

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