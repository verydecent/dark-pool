import React from 'react';
import SideNav from '../SideNav';
import HeaderNav from '../HeaderNav';
import './styles.css';

const withNav = Component => (props) => {
	return (
		<div>
			<SideNav {...props} />
			<div className='header-wrapper'>
				<HeaderNav />
				<div className='view-wrapper'>
					<Component />
				</div>
			</div>
		</div>
	);
}

export default withNav;
