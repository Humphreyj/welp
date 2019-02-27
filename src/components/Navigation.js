import React from 'react';
import {NavLink} from 'react-router-dom'

const Navigation = (props) => {
    return (
        <nav className="navbar">
          <h1 className='welp-nav'>Welp</h1>
          <ul className='nav'>
            <NavLink to='/' className='nav-item'>Home</NavLink>
            <NavLink to='/ratings' className='nav-item'>Ratings</NavLink>
            <NavLink to='/profile' className='nav-item'>Account</NavLink>
          </ul>
        </nav>
    );
};



export default Navigation;
