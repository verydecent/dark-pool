import React from 'react';
import { connect } from 'react-redux';
import './styles.css';

const AuthModal = ({
  message
}) => {
  return (
    <div className='auth-modal'>
      <div className='auth-modal-overlay' onClick={() => { }}></div>
      <div className='auth-modal-view'>

        {message}
      </div>
    </div>
  );
}

// const mapStateToProps = state => 

export default AuthModal;