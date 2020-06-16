import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

const SideNav = () => {
	return (
		<div className='sidenav'>
			<div className='sidenav-logo'>darkpoolnotes</div>
			<div className='sidenav-link-list'>
				<ul>
					<li>
						<Link to='/app'>Dashboard</Link>
					</li>
					<li>
						<Link to='/app/calendar'>Calendar</Link>
					</li>
					<li>
						<Link to='/app/collection'>Collection</Link>
					</li>
					<li>
						<Link to='/app/profile'>Profile</Link>
					</li>
					<li>
						<Link to='/app/account'>Account</Link>
					</li>
					<li>
						<Link to='/'>Logout</Link>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default SideNav;
