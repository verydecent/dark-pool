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
      <div className='view'>
        <div className='dashboard-graph'>
          Graph goes here
        </div>
      </div>
    );
  }
}

export default withNav(Dashboard);
