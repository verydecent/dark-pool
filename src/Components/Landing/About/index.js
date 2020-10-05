import React from 'react';
import withNav from '../Hoc/withNav';
import './styles.css';

const About = () => {
  return (
    <div className='home-wrapper'>
      About Us
    </div>
  );
}

export default withNav(About);