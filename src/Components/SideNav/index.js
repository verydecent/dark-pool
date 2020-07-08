import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

const SideNav = () => {
	return (
		<div className='sidenav'>
			<div className='sidenav-logo'>
				<Link to='/'>darkpoolnotes</Link>
			</div>
			<div className='sidenav-link-container'>
				<ul className='sidenav-link-list'>
					<li className='sidenav-link'>
						<Link to='/app'>X Dashboard</Link>
					</li>
					<li className='sidenav-link'>
						<Link to='/app/calendar'>X Calendar</Link>
					</li>
					<li className='sidenav-link'>
						<Link to='/app/collection'>X Collection</Link>
					</li>
					<li className='sidenav-link'>
						<Link to='/app/profile'>X Profile</Link>
					</li>
				</ul>
        <ul className='sidenav-link-utilities'>
          <li className='sidenav-link'>
            <Link to='/app/account'>X Account</Link>
					</li>
					<li className='sidenav-link'>
						<Link to='/'>X Logout</Link>
					</li>
        </ul>
			</div>
		</div>
	);
}

export default SideNav;
