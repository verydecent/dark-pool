import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
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

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        {/* Landing */}
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route exact path='/auth/activate/:token' exact component={ActivateAccount} />
        {/* App */}
        <Route exact path='/app' component={DashboardView} />
        <Route exact path='/app/tasks' component={TaskView} />
        <Route exact path='/app/calendar' component={CalendarView} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
