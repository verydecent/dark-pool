import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Home';
import Nav from '../Nav';

const Routes = () => {
  return (
    <Switch>
      <Nav />
      <Route exact path='/' component={Home} />
    </Switch>
  );
}

export default Routes;
