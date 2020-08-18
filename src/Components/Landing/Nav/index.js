import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Nav = () => {
  return (
    <div className='nav'>
      <div className='nav__global-logo'>
        <Link to='/'>darkpoolnotes</Link>
      </div>
      <nav className='nav__menu'>
        <ul className='nav__menu__list'>
          <li><Link to='/login'>Login</Link></li>
          <li><Link to='/register'>Register</Link></li>
          <li><Link to='/app'>Dashboard</Link></li>
        </ul>
      </nav>
		</div>
  );
}

export default Nav;
