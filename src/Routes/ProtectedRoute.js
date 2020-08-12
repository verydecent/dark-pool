import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isAuthenticated } from '../Utilities/helpers';

const ProtectedRoutes = ({ component: Component, ...rest }) => (
  <Route {...rest} render ={
    props => isAuthenticated()
      ? <Component {...props} />
      : <Redirect to={{ pathName: '/login' }} />
  } />
);

export default ProtectedRoutes;