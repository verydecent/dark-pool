import React from 'react';
import SideNav from '../SideNav';
import withSideNav from '../Hoc/withSideNav';
import './styles.css';

const Dashboard = () => {
	return (
		<div className='dashboard'>
			Dashboard Component
		</div>
	);
}

export default withSideNav(Dashboard);
