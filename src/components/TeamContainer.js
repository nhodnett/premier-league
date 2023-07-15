import React from 'react';
import Card from './Card';
import '../styles/TeamContainer.css';
import PropTypes from 'prop-types';

const TeamContainer = ({ teams, addFavorite, removeFavorite, handleClick }) => {
    
    const teamCards = teams.map(team => {
  
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
        <article className='intro'>
          Welcome to "Premier League Pick" Click on a card below to get more detailed information about that team. If you would like to favorite a team, click the star at the top of the card and that team will be added to your favorites.
          Choose wisely to avoid a lifetime of misery..!
        </article>
            { teamCards }
        </div>
    )
}

export default TeamContainer;

TeamContainer.propTypes = {
    teams: PropTypes.array,
    addFavorite: PropTypes.func,
    removeFavorite: PropTypes.func,
    favorites: PropTypes.array,
    isFavorited:PropTypes.bool,
    handleClick: PropTypes.func
};