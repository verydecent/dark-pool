import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Landing/Home';
import Dashboard from '../App/Dashboard';
import Nav from '../Landing/Nav';

const Routes = () => {
  return (
    <Switch>
			<Nav />
      <Route exact path='/' component={Home} />
      <Route exact path='/dash' component={Dashboard} />
		</Switch>
  );
}

export default Routes;
