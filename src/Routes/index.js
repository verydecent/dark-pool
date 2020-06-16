import React from 'react';
import { Switch, Route } from 'react-router-dom';
// Landing
import Home from '../Landing/Home';
import Nav from '../Landing/Nav';
// App
import Dashboard from '../App/Dashboard';
import SideNav from '../App/SideNav';

const Routes = () => {
  return (
		<>
			<Nav />
			<Switch>
				// Landing
				<Route exact path='/' component={Home} />
				// App
				<Route path='/app' component={Dashboard} />

			</Switch>
		</>
  );
}

export default Routes;
