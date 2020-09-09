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

const adminNav = (
  <>
    <li>
      <Link to='/app/admin'>
        <div className='sidenav-link-li-icon'>
          <ChartBar />
        </div>
        Admin Dashboard
      </Link>
    </li>
  </>
);

const subscriberNav = (
  <>
    <li>
      <Link to='/app'>
        <div className='sidenav-link-li-icon'>
          <ChartBar />
        </div>
        Dashboard
      </Link>
    </li>
    <li>
      <Link to='/app/tasks'>
        <div className='sidenav-link-li-icon'>
          <ListUl />
        </div>
        Tasks
        </Link>
    </li>
    <li>
      <Link to='/app/calendar'>
        <div className='sidenav-link-li-icon'>
          <Calendar />
        </div>
        Calendar
      </Link>
    </li>
  </>
);

const SideNav = (props) => {
  return (
    <div className='sidenav'>
      <div className='sidenav-container'>
        <div className='sidenav-logo'>
          <Link to='/'><h2>DarkPoolNotes</h2></Link>
        </div>
        <ul className='sidenav-links'>
          {isAuthenticated() && isAuthenticated().role === 'admin' ? adminNav : null}
          {isAuthenticated() && isAuthenticated().role === 'subscriber' ? subscriberNav : null}
          <li>
            <Link to='/app/account'>
              <div className='sidenav-link-li-icon'>
                <User />
              </div>
              Account
            </Link>
          </li>
          <li
            id='logout'
            style={{ cursor: 'pointer' }}
            onClick={() => logout(() => props.history.push('/'))}
          >
            <div className='sidenav-link-li-icon'>
              <PeaceOut />
            </div>
            Logout
        </li>
        </ul>
      </div>
    </div>
  );
}

export default SideNav;
