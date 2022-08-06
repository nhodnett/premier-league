import React from 'react';
import '../styles/TeamDetails.css'
import PropTypes from 'prop-types';

const TeamDetails = (props) => {
   
    let selected = props.teams.find(team => team.idTeam === props.id) 
    
    return (
        <>
        <div className='team-details'>
            <section className='headline-info'>
                <article className='name-year'>
                    <h2 className='name'>{selected.strTeam}</h2> 
                    <p className='year-formed'>{selected.intFormedYear}</p>
                </article>
                <article className='social-media'>
                    <p className='website'>{selected.strWebsite}</p>
                    <p className='twitter'>{selected.strTwitter}</p>
                    <p className='instagram'>{selected.strInstagram}</p>
                </article>
            </section>
                <section className='detailed-info'>
                <article className='stadium-details'>
                    <p className='stadium-name'>{selected.strStadium}</p>
                    <p className='stadium-location'>{selected.strStadiumLocation}</p>
                    <p className='stadium-capacity'>{selected.strStadiumCapacity}</p>
                    <p className='stadium -description'>{selected.strStadiumDescription}</p>
                </article>
                </section>
                <div className='background-image'>
                    <img src={selected.strStadiumThumb}></img>
                </div>
                    <p className='team-history'>{selected.strDescriptionEN}</p>
        </div>
        </>
    )
}

export default TeamDetails;

TeamDetails.propTypes = {
    teams: PropTypes.array,
};