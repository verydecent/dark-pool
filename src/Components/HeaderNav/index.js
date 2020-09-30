import React from 'react';
import { User } from '../FAIcons/index';
import './styles.css';
import { connect } from 'react-redux';
import { toggleAccountModal } from '../../Redux/Actions';
import AccountView from '../AccountModal';

const HeaderNav = ({
  toggleAccountModal
}) => {
  return (
    <div className='header-nav'>
      <AccountView toggleAccountModal={toggleAccountModal} />
      <div className='header-nav-top'>
        <div className='header-nav-user-icon' onClick={() => toggleAccountModal()}>
          <User />
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    toggleAccountModal: () => dispatch(toggleAccountModal())
  }
}

export default connect(null, mapDispatchToProps)(HeaderNav);