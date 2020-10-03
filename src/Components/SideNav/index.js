import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import { logout } from '../../Utilities/helpers';
import { isAuthenticated } from '../../Utilities/helpers';
import {
  ChartBar,
  ListUl,
  PeaceOut
} from '../FAIcons';

const adminLink = isAuthenticated() && isAuthenticated.role === 'admin'
  ? (
    <li style={{ background: history.location.pathname === '/app/admin' ? '#E44B6F' : '' }}>
      <Link to='/app/admin'>
        <div className='sidenav-icon' style={{ color: history.location.pathname === '/app/admin' ? '#fff' : '' }}>
          <ChartBar />
        </div>
        <span className='sidenav-text' style={{ color: history.location.pathname === '/app/admin' ? '#fff' : '' }}>
          Admin Dashboard
      </span>
      </Link>
    </li>
  )
  : null;

const SideNav = ({
  history
}) => {
  return (
    <div className='sidenav'>
      <div className='sidenav-container'>
        <div className='sidenav-logo'>
          <Link to='/'><h2>DarkPool</h2></Link>
        </div>
        <ul className='sidenav-links'>
          <li style={{ background: history.location.pathname === '/app' ? '#E44B6F' : '' }}>
            <Link to='/app'>
              <div className='sidenav-icon' style={{ color: history.location.pathname === '/app' ? '#fff' : '' }}>
                <ChartBar />
              </div>
              <span className='sidenav-text' style={{ color: history.location.pathname === '/app' ? '#fff' : '' }}>
                Dashboard
              </span>
            </Link>
          </li>
          <li style={{ background: history.location.pathname === '/app/tasks' ? '#E44B6F' : '' }}>
            <Link to='/app/tasks'>
              <div className='sidenav-icon' style={{ color: history.location.pathname === '/app/tasks' ? '#fff' : '' }}>
                <ListUl />
              </div>
              <span className='sidenav-text' style={{ color: history.location.pathname === '/app/tasks' ? '#fff' : '' }}>
                Tasks
              </span>
            </Link>
          </li>
          {/* Link option for Administrators */}
          {adminLink}
          <li
            id='logout'
            onClick={() => logout(() => history.push('/'))}
          >
            <div className='sidenav-icon'>
              <PeaceOut />
            </div>
            <span className='sidenav-text'>
              Logout
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideNav;
