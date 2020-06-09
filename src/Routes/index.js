import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Home';
import Nav from '../Nav';
import Post from '../Post';

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/post' component={Post} /> 
    </Switch>
  );
}

export default Routes;
