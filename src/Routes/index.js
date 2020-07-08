import React from 'react';
import { Switch, Route } from 'react-router-dom';
// Landing
import Home from '../Components/Landing/Home';
import Nav from '../Components/Landing/Nav';
import Login from '../Components/Landing/Login';
import Register from '../Components/Landing/Register';
// In App
import Dashboard from '../Components/Dashboard';

const Routes = () => {
  return (
		<Switch>
			// Landing
			<Route exact path='/' component={Home} />
      <Route path='/login' component={Login} />
      <Route path='/register' component={Register} />
			// App
			<Route path='/app' component={Dashboard} />

		</Switch>
  );
}

export default Routes;
