import React from 'react';
import SideNav from '../SideNav';
import './styles.css';

const withSideNav = Component => (props) => {
	return (
		<div className='app-view'>
			<div className='main-view'>
				<Component />
			</div>
			<SideNav {...props} />
		</div>
	);
}

export default withSideNav;
