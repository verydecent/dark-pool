import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Nav = () => {
  return (
    <div className='nav-container-1'>
      <div className='nav-container-2'>
        <div className='nav-global-logo'>
          <Link to='/'>DarkPool</Link>
        </div>
        <nav className='nav-menu'>
          <ul className='nav-menu-list'>
            <li className='nav-menu-list-item'><Link to='/login'>Home</Link></li>
            <li className='nav-menu-list-item'><Link to='/login'>About</Link></li>
            <li className='nav-menu-list-item'><Link id='bordered-nav-link' to='/login'>Login</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Nav;
