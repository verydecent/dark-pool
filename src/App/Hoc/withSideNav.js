import React from 'react';
import SideNav from '../SideNav';
import './styles.css';

const withSideNav = Component => () => {
	return (
		<div className='main-view'>
			<SideNav />
			<Component />
		</div>
	);
}

export default withSideNav;
