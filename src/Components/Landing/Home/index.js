import React from 'react';
import withNav from '../Hoc/withNav';

const Home = () => {
  return (
    <div className='home'>
			Home Page Component Here
    </div>
  );
}

export default withNav(Home);
