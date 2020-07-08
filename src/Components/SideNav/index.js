import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

const SideNav = () => {
	return (
		<div className='sidenav'>
      <div className='sidenav-container'>
        <div className='sidenav-logo'>
          <Link to='/'>DarkPoolNotes</Link>
        </div>
        <ul className='sidenav-link-list'>
          <li className='sidenav-link'>
            <Link to='/app/collection'>Collection</Link>
          </li>
          <li className='sidenav-link'>
            <Link to='/app'>Dashboard</Link>
          </li>
          <li className='sidenav-link'>
            <Link to='/app/calendar'>Calendar</Link>
          </li>
          <li className='sidenav-link'>
            <Link to='/app/profile'>Profile</Link>
          </li>
        </ul>
      </div>
			<ul className='sidenav-link-utilities'>
        <li className='sidenav-link'>
          <Link to='/app/account'>Account</Link>
        </li>
        <li className='sidenav-link'>
          <Link to='/'>Logout</Link>
        </li>
      </ul>
		</div>
	);
}

export default SideNav;
