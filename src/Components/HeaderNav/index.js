import React from 'react';
import { User } from '../FAIcons/index';
import './styles.css';

const HeaderNav = () => {
  return (
    <div className='header-nav'>
      <div className='header-nav-top'>
        <div className='header-nav-user-icon'>
          <User />
        </div>
      </div>
      {/* <div className='header-nav-bottom'>

      </div> */}
    </div>
  );
}

export default HeaderNav;