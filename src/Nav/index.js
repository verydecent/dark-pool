import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className='nav'>
      <div className='nav__global-logo'>
        <Link to='/'>Logo Here</Link>
      </div>
      <nav className='nav__menu'>
        <Link to='/'>Home</Link>
        <Link to='/concept'>Concept</Link>
      </nav>
      <nav className='nav__utility'>
        <Link to='log-in'>Log In</Link>
        <Link to='register'>Register</Link>
      </nav>
    </div>
  );
}

export default Nav;
