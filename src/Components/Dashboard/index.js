import React from 'react';
import SideNav from '../SideNav';
import withSideNav from '../Hoc/withSideNav';
import './styles.css';

const Dashboard = () => {
	return (
		<div className='dashboard'>
			<div className='dashboard-graph'>
				Graph goes here
			</div>
			<div className='dashboard-agenda'>
				Agenda goes here
			</div>
		</div>
	);
}

export default withSideNav(Dashboard);
