import React from 'react';
import withNav from '../Hoc/withNav';
import Register from '../Register';
import Wave from 'react-wavify';
import './styles.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='home-wrapper'>
      <div className='home-hero-section'>
        <h1 className='home-title'>
          DarkPool
        </h1>
        <p className='home-description'>
          Brainstorm Organize Reflect
        </p>
        <Link className='home-hero-button' to='/register'>
          <button>
            Register
          </button>
        </Link>
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

export default withNav(Home);
