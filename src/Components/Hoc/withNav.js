import React from 'react';
import SideNav from '../SideNav';
import './styles.css';

const withNav = Component => (props) => {
	return (
		<div className='app-view'>
			<SideNav {...props} />
			<div className='main-view'>
				<Component />
			</div>
		</div>
	);
}

export default withNav;
