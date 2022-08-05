import React from 'react';
import Card from './Card';
import '../styles/TeamContainer.css';
// import Favorites from './Favorites';

const TeamContainer = ({ teams, addFavorite, removeFavorite, favorites, isFavorited, handleClick }) => {
    console.log('7', teams)
    const teamCards = teams.map(team => {
 
        // if (favorites) {
        // favorites.forEach((favoriteTeam) => {
        //     if(team.idTeam === favoriteTeam.id) {
        //         isFavorited = true
        //     } else if (!team.idTeam === favoriteTeam.id) {
        //         isFavorited = false
        //     }
        // })
        // }   

        return (
            <Card 
                strTeamBadge={team.strTeamBadge}
                idTeam={team.idTeam}
                key={team.idTeam}
                handleClick={handleClick}
                addFavorite={addFavorite}
                removeFavorite={removeFavorite}
                isFavorited={team.isFavorited}
            />
        )
    })
    return (
        <div className='team-container'>
            { teamCards }
        </div>
    )
}

export default TeamContainer;