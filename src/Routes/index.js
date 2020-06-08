import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../Home';
import Nav from '../Nav';

const Routes = () => {
  return (
    <>
      <Nav />
      <Route exact path='/' component={Home} />
    </>
  );
}

export default Routes;
