import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// Private Routing
import ProtectedRoute from './ProtectedRoute';
import AdminRoute from './AdminRoute';
// Landing
import Home from '../Components/Landing/Home';
import About from '../Components/Landing/About';
import Login from '../Components/Landing/Login';
import Register from '../Components/Landing/Register';
import ActivateAccount from '../Components/Landing/ActivateAccount';
import ForgotPassword from '../Components/Landing/ForgotPassword';
import ResetPassword from '../Components/Landing/ResetPassword';
// In App
import DashboardView from '../Components/DashboardView';
import TaskView from '../Components/TaskView';
import ProfileView from '../Components/ProfileView';

import ProtectedAdmin from '../Components/ProtectedAdmin';
import Protected from '../Components/Protected';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <ProtectedRoute path='/protected' component={Protected} />

        {/* Landing */}
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route exact path='/auth/activate/:token' component={ActivateAccount} />
        <Route exact path='/auth/password/forgot' component={ForgotPassword} />
        <Route exact path='/auth/password/reset/:token' component={ResetPassword} />
        <Route path='/app/profile' component={ProfileView} />

        {/* App - Subscriber */}
        <ProtectedRoute exact path='/app' component={DashboardView} />
        <ProtectedRoute exact path='/app/tasks' component={TaskView} />

        {/* App - Admin */}
        <AdminRoute exact path='/app/admin' component={ProtectedAdmin} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
