import React from 'react';
import Nav from '../Nav';

const withNav = Component => (props) => {
	return (
		<div className='landing-view'>
			<Nav />
			<Component props={props} />
		</div>
	);
}

export default withNav;
