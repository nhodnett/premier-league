import React from 'react';
import FavoriteCard from './FavoriteCard';
import '../styles/Favorites.css';

const Favorites = ({ favorites }) => {

    const favoriteCards = favorites.map(favoriteTeam => {
        return (
            <FavoriteCard 
                strTeamBadge={favoriteTeam.strTeamBadge}
                idTeam={favoriteTeam.idTeam}
                key={favoriteTeam.idTeam}
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