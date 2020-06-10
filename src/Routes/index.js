import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Home';
import Nav from '../Nav';
import Post from '../Post';
import Notes from '../Notes';

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/post' component={Post} />
      <Route path='/all' component={Notes} />
    </Switch>
  );
}

export default Routes;
