import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {

    return (
    <div className='nav-bar'>
        <Link to='/' className='nav-link'>
        <h1>My Old Man Said...</h1>
        </Link>
        <Link to='/teams/favorites' className='nav-link'>
            <button className='favorites-button'>Favorites</button>
        </Link>       
    </div>

    )
}



export default Navbar;