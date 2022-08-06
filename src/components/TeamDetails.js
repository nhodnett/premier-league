import React from 'react';
// import { Link } from 'react-router-dom';
import '../styles/TeamDetails.css'

const TeamDetails = (props) => {
   
    let selected = props.teams.find(team => team.idTeam === props.id) 
    
    return (
        <div className='team-details'>
            <h2>{selected.strTeam}</h2> 
            <p>{selected.intFormedYear}</p>
            <p>{selected.strStadium}</p>
            <article className='stadium-details'>
                <p>{selected.strStadiumLocation}</p>
                <p>{selected.strStadiumCapacity}</p>
                <p>{selected.strStadiumDescription}</p>
            </article>
            <article className='social-media'>
                <p>{selected.strWebsite}</p>
                <p>{selected.strTwitter}</p>
                <p>{selected.strInstagram}</p>
            </article>
            <p>{selected.strDescriptionEN}</p>
            <div className='background-image'>
                <img src={selected.strStadiumThumb}></img>
            </div>
        </div>
    )
}

export default TeamDetails;