// import React from 'react';
import '../styles/TeamDetails.css'

const TeamDetails = (idTeam, strTeam, strAlternate, intFormedYear, strStadium, strKeywords, strStadiumThumb, strStadiumDescription, strStadiumLocation, strStadiumCapacity, strWebsite, strTwitter, strInstagram, strDescriptionEN, strTeamFanart1) => {

    return (
        <div className='team-details'>
            <h2>{strTeam}</h2>
            <p>{strAlternate}</p>
            <div className='background-image'>
                <img src={strStadiumThumb}></img>
            </div>

        </div>
    )
}

export default TeamDetails;