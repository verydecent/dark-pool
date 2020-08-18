import React from 'react';
import SideNav from '../SideNav';
import withSideNav from '../Hoc/withSideNav';
import './styles.css';

class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }
  
  render() {
    return (
      <div className='dashboard'>
        <div className='dashboard-graph'>
          Graph goes here
        </div>
      </div>
    );
  }
}

export default withSideNav(Dashboard);
