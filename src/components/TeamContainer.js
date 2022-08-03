import React from 'react';
import Card from './Card';
import '../styles/TeamContainer.css';

const TeamContainer = ({ teams }) => {

    const teamCards = teams.map(team => {
        return (
            <Card 
                strTeamBadge={team.strTeamBadge}
                id={team.idTeam}
                key={team.idTeam}
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