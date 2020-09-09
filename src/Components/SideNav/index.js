import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import { logout } from '../../Utilities/helpers';
import { isAuthenticated } from '../../Utilities/helpers';
import {
  ChartBar,
  ListUl,
  Calendar,
  User,
  PeaceOut
} from '../FAIcons';

const adminLink = isAuthenticated() && isAuthenticated.role === 'admin'
  ? (
    <li>
      <Link to='/app/admin'>
        <div className='sidenav-icon'>
          <ChartBar />
        </div>
        <span className='sidenav-text'>
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
          <Link to='/'><h2>DarkPoolNotes</h2></Link>
        </div>
        <ul className='sidenav-links'>
          <li>
            <Link to='/app'>
              <div className='sidenav-icon'>
                <ChartBar />
              </div>
              <span className='sidenav-text'>
                Dashboard
              </span>
            </Link>
          </li>
          <li>
            <Link to='/app/tasks'>
              <div className='sidenav-icon'>
                <ListUl />
              </div>
              <span className='sidenav-text'>
                Tasks
              </span>
            </Link>
          </li>
          <li>
            <Link to='/app/calendar'>
              <div className='sidenav-icon'>
                <Calendar />
              </div>
              <span className='sidenav-text'>
                Calendar
              </span>
            </Link>
          </li>
          <li>
            <Link to='/app/account'>
              <div className='sidenav-icon'>
                <User />
              </div>
              <span className='sidenav-text'>
                Account
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
