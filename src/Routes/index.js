import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Front/Home';
import Post from '../App/Post';
import Notes from '../App/Notes';

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
