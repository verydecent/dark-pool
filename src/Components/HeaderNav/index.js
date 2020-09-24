import React from 'react';
import { User } from '../FAIcons/index';
import './styles.css';
import { connect } from 'react-redux';
import { toggleAccountModal } from '../../Redux/Actions';

const mapStateToProps = state => {
  return {
    isAccountModalOpen: state.isAccountModalOpen
  }
};

const mapDispatchToProps = dispatch => {
  return {
    toggleAccountModal: () => dispatch(toggleAccountModal())
  }
};

const HeaderNav = ({ isAccountModalOpen, toggleAccountModal }) => {
  return (
    <div className='header-nav'>
      <div className='header-nav-top'>
        <div className='header-nav-user-icon' onClick={() => toggleAccountModal()}>
          <User />
        </div>
      </div>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderNav);