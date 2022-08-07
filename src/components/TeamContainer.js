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