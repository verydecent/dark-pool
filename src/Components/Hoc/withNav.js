import React from 'react';
import SideNav from '../SideNav';
import HeaderNav from '../HeaderNav';
import './styles.css';

const withNav = Component => (props) => {
	return (
		<div className='app-view'>
			<SideNav {...props} />
			<div className='main-view'>
				{/* <HeaderNav /> */}
				<div className='dashboard-view'>
					<Component />
				</div>
			</div>
		</div>
	);
}

export default withNav;
