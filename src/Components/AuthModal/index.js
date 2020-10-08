import React from 'react';
import { connect } from 'react-redux';
import { toggleAuthModal } from '../../Redux/actionCreators';
import { Times } from '../FAIcons';
import './styles.css';

const AuthModal = ({
  message,
  isAuthModalOpen,
  toggleAuthModal
}) => {
  if (isAuthModalOpen) {
    return (
      <div className='auth-modal'>
        <div className='auth-modal-overlay' onClick={toggleAuthModal}></div>
        <div className='auth-modal-view'>
          <div className='auth-modal-header'>
            <Times />
          </div>
          <div className='auth-modal-message'>
            {message}
          </div>
        </div>
      </div>
    );
  }
  else {
    return null;
  }
}

const mapStateToProps = state => {
  return {
    isAuthModalOpen: state.isAuthModalOpen
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleAuthModal: () => dispatch(toggleAuthModal())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthModal);