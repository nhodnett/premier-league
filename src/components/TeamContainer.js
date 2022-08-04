import React from 'react';
import Card from './Card';
import '../styles/TeamContainer.css';

const TeamContainer = ({ teams, handleClick }) => {

    const teamCards = teams.map(team => {
        return (
            <Card 
                strTeamBadge={team.strTeamBadge}
                idTeam={team.idTeam}
                key={team.idTeam}
                handleClick={handleClick}
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