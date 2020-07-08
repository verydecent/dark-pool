import React from 'react';
import Nav from '../Nav';

const withNav = Component => () => {
	return (
		<div className='landing-view'>
			<Nav />
			<Component />
		</div>
	);
}

export default withNav;
