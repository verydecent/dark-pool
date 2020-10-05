import React from 'react';
import withNav from '../Hoc/withNav';
import Wave from 'react-wavify';

const About = () => {
  return (
    <div className='home-wrapper'>
      <div className='landing-section'>
        <p className='landing-description'>
          Thank you for visiting DarkPool
        </p>
        <p className='landing-description'>
          DarkPool is a to-do scheduling app that allows you to track your progress with time graphs
        </p>
        <p className='landing-description'>
          DarkPool was designed and developed by Wonjae Hwang
        </p>
      </div>
      <div className='wave-section'>
        <Wave fill='#418BCA'
          paused={false}
          options={{
            amplitude: 25,
            speed: .5,
            points: 3
          }}
        />
      </div>
    </div>
  );
}

export default withNav(About);