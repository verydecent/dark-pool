import React from 'react';
import { User } from '../FAIcons/index';
import './styles.css';

const HeaderNav = () => {
  return (
    <div className='header-nav'>
      <div className='header-nav-user-icon'>
        <User />
      </div>
    </div>
  );
}

export default HeaderNav;