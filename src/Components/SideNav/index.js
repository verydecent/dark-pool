import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import { logout } from '../../Utilities/helpers';
import { isAuthenticated } from '../../Utilities/helpers';

const SideNav = (props) => {
	return (
		<div className='sidenav'>
      <div className='sidenav-container'>
        <div className='sidenav-logo'>
          <Link to='/'>DarkPoolNotes</Link>
        </div>
        <ul className='sidenav-link-list'>
          {
            isAuthenticated() && isAuthenticated().role === 'admin'
              ? (<li className='sidenav-link'>
                  <Link to='/app/admin'>Admin Dashboard</Link>
                </li>)
              : null
          }
          {
            isAuthenticated() && isAuthenticated().role === 'subscriber'
              ? (<li className='sidenav-link'>
                  <Link to='/app'>Dashboard</Link>
                </li>)
              : null
          }
          <li className='sidenav-link'>
            <Link to='/app/tasks'>Tasks</Link>
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
        <li
          style={{ cursor: 'pointer' }}
          className='sidenav-link'
          onClick={() => logout(() => props.history.push('/'))}
        >
          Logout
        </li>
      </ul>
		</div>
	);
}

export default SideNav;
