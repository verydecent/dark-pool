import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// Private Routing
import ProtectedRoute from './ProtectedRoute';
import AdminRoute from './AdminRoute';
// Landing
import Home from '../Components/Landing/Home';
import Nav from '../Components/Landing/Nav';
import Login from '../Components/Landing/Login';
import Register from '../Components/Landing/Register';
import ActivateAccount from '../Components/Landing/ActivateAccount';
// In App
import DashboardView from '../Components/DashboardView';
import TaskView from '../Components/TaskView';
import CalendarView from '../Components/CalendarView';
import AccountView from '../Components/AccountView'

import ProtectedAdmin from '../Components/ProtectedAdmin';
import Protected from '../Components/Protected';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>

        <ProtectedRoute path='/protected' component={Protected} />

        {/* Landing */}
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route exact path='/auth/activate/:token' exact component={ActivateAccount} />

        {/* App - Subscriber */}
        <ProtectedRoute exact path='/app' component={DashboardView} />
        <ProtectedRoute exact path='/app/tasks' component={TaskView} />
        <ProtectedRoute exact path='/app/calendar' component={CalendarView} />
        <ProtectedRoute exact path='/app/account' component={AccountView} />

        {/* App - Admin */}
        <AdminRoute exact path='/app/admin' component={ProtectedAdmin} />
        
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
