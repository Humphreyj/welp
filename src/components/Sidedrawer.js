import React from 'react';
import {NavLink} from 'react-router-dom'

const Sidedrawer = (props) => {

  let drawerClasses = 'side-navbar';
  if(props.show) {
    drawerClasses = 'side-navbar open'
  }



    return (
        <nav className={drawerClasses}>
          <h1 className='welp-nav'>Welp</h1>
          <ul className='side-nav'>
            <NavLink to='/' className='side-nav-item'>Home</NavLink>
            <NavLink to='/ratings' className='side-nav-item'>Ratings</NavLink>
            <NavLink to='/profile' className='side-nav-item'>Account</NavLink>
          </ul>
        </nav>
    );
};



export default Sidedrawer;
