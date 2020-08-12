import React from 'react';
import SideNav from '../SideNav';
import './styles.css';

const withSideNav = Component => (props) => {
	return (
		<div className='app-view'>
			<SideNav {...props} />
			<div className='main-view'>
				<Component />
			</div>
		</div>
	);
}

export default withSideNav;
