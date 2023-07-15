import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {

    return (
        <div className='nav-bar'>
            <NavLink to='/' className='nav-link'>
                <h1>Premier League Pick</h1>
            </NavLink>
            <NavLink to='/teams/favorites' className='nav-link'>
                <button className='favorites-button'>Favorites</button>
            </NavLink>       
        </div>
    )
}

export default Navbar;