import React from 'react';
import SideNav from '../SideNav';
import HeaderNav from '../HeaderNav';
import './styles.css';

const withNav = Component => (props) => {
	return (
		<div className='app-view'>
			<HeaderNav />
			<div className='main-view'>
				<SideNav {...props} />
				<Component />
			</div>
		</div>
	);
}

export default withNav;
