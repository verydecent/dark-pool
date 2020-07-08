import React from 'react';
import withSideNav from '../Hoc/withSideNav.js';
import './styles.css';

class Collection extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <div className='collection'>
        Collection Component Here
      </div>
    );
  }
}

export default withSideNav(Collection);
