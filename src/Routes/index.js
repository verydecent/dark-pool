import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Landing/Home';
import Nav from '../Landing/Nav';

import Dashboard from '../App/Dashboard';

const Routes = () => {
  return (
		<>
			<Nav />
			<Switch>
				<Route exact path='/' component={Home} />
				<Route path='/app' component={Dashboard} />
			</Switch>
		</>
  );
}

export default Routes;
