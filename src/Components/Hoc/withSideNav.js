import React from 'react';
import SideNav from '../SideNav';
import './styles.css';

const withSideNav = Component => () => {
	return (
		<div className='app-view'>
			<SideNav />
			<div className='main-view'>
				<Component />
			</div>
		</div>
	);
}

export default withSideNav;
