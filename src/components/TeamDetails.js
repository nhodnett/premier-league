import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/TeamDetails.css'

const TeamDetails = (props) => {
    // console.log(props)
    const { idTeam, 
            strTeam, 
            strAlternate, 
            intFormedYear, 
            strStadium, 
            strKeywords, 
            strStadiumThumb, 
            strStadiumDescription, 
            strStadiumLocation, 
            strStadiumCapacity, 
            strWebsite, 
            strTwitter, 
            strInstagram, 
            strDescriptionEN, 
            strTeamFanart1
    } = props.details
    
            return (
        <div className='team-details'>
            {/* <Link to='/teamdetails'> */}
                <h2>{strTeam}</h2> 
                <p>{intFormedYear}</p>
                <p>{strStadium}</p>
                <article className='stadium-details'>
                    <p>{strStadiumLocation}</p>
                    <p>{strStadiumCapacity}</p>
                    <p>{strStadiumDescription}</p>
                </article>
                <article className='social-media'>
                    <p>{strWebsite}</p>
                    <p>{strTwitter}</p>
                    <p>{strInstagram}</p>
                </article>
                <p>{strDescriptionEN}</p>
                <div className='background-image'>
                    <img src={strStadiumThumb}></img>
                </div>
            {/* </Link> */}

        </div>
    )
}

export default TeamDetails;