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
    <li className='sidenav-link-li'>
      <div className='sidenav-link-li-icon'>
        <ChartBar />
      </div>
      <Link to='/app/admin'>Admin Dashboard</Link>
    </li>
  </>
);

const subscriberNav = (
  <>
    <li className='sidenav-link-li'>
      <div className='sidenav-link-li-icon'>
        <ChartBar />
      </div>
      <Link to='/app'>Dashboard</Link>
    </li>
    <li className='sidenav-link-li'>
      <div className='sidenav-link-li-icon'>
        <ListUl />
      </div>
      <Link to='/app/tasks'>Tasks</Link>
    </li>
    <li className='sidenav-link-li'>
      <div className='sidenav-link-li-icon'>
        <Calendar />
      </div>
      <Link to='/app/calendar'>Calendar</Link>
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
        <ul className='sidenav-link-list'>
          {isAuthenticated() && isAuthenticated().role === 'admin' ? adminNav : null}
          {isAuthenticated() && isAuthenticated().role === 'subscriber' ? subscriberNav : null}
          <li className='sidenav-link-li'>
            <div className='sidenav-link-li-icon'>
              <User />
            </div>
            <Link to='/app/account'>Account</Link>
          </li>
          <li
            className='sidenav-link-li'
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
