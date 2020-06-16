import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Nav = () => {
  return (
    <div className='nav'>
      <div className='nav__global-logo'>
        <Link to='/'>Logo Here</Link>
      </div>
      <nav className='nav__menu'>
        <ul className='nav__menu__list'>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/concept'>Concept</Link></li>
          <li><Link to='/post'>Post</Link></li>
          <li><Link to='/all'>See Notes</Link></li>
        </ul>
      </nav>
      <nav className='nav__utility'>
        <Link to='/log-in'>Log In</Link>
        <Link to='/register'>Register</Link>
      </nav>
    </div>
  );
}

export default Nav;
