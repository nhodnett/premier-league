import React from 'react';
// import { Link } from 'react-router-dom';
import '../styles/TeamDetails.css'

const TeamDetails = (props) => {
   
    let selected = props.teams.find(team => team.idTeam === props.id) 
    
    return (
        <div className='team-details'>
            <h2 className='name'>{selected.strTeam}</h2> 
            <p className='year-formed'>{selected.intFormedYear}</p>
        <article className='stadium-details'>
            <p className='stadium-name'>{selected.strStadium}</p>
            <p className='stadium-location'>{selected.strStadiumLocation}</p>
            <p className='stadium-capacity'>{selected.strStadiumCapacity}</p>
            <p className='stadium -description'>{selected.strStadiumDescription}</p>
        </article>
        <article className='social-media'>
            <p className='website'>{selected.strWebsite}</p>
            <p className='twitter'>{selected.strTwitter}</p>
            <p className='instagram'>{selected.strInstagram}</p>
        </article>
            <p className='team-history'>{selected.strDescriptionEN}</p>
        <div className='background-image'>
            <img src={selected.strStadiumThumb}></img>
        </div>
        </div>
    )
}

export default TeamDetails;