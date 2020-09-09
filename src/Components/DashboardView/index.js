import React from 'react';
import SideNav from '../SideNav';
import withNav from '../Hoc/withNav';
import './styles.css';

class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <div className='dashboard-view'>



        Todo list
        <br />
        <br />
        Frontend:
        <br />
        Error handling requests and login/registration form
        <br />
        Password confirmation for account and registration....
        <br />

        Come back for detail padding and font sizing and UI colors later, first get everything into place
        <br />

        In order from easiest to most complex and time consuming
        Account Settings
        Header Bar
        Side Nav
        Landing
        Dashboard
        Calendar

        <br />
        Possible ideas:
        <br />
        Add a pie graph on the top right side of Tasks to show how many tasks are finished
        <br />


        <br />


        Backend:
        <br />
        Validating required info such as user_id
        Adding error response




      </div>
    );
  }
}

export default withNav(Dashboard);
