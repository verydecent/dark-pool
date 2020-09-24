import React from 'react';
import { User } from '../FAIcons/index';
import './styles.css';
import { connect } from 'react-redux';
import { toggleAccountModal } from '../../Redux/Actions';

const mapDispatchToState = dispatch => dispatch(toggleAccountModal())

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

export default connect(null, mapDispatchToState)(HeaderNav);