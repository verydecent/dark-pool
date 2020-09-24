import React from 'react';
import { User } from '../FAIcons/index';
import './styles.css';
import { connect } from 'react-redux';
import { toggleAccountModal } from '../../Redux/Actions';

const mapStateToProps = {};

const mapDispatchToProps = dispatch => {
  console.log('dispatch', dispatch(toggleAccountModal()));
  return {
    toggleAccountModal: () => dispatch(toggleAccountModal())
  }
};

const HeaderNav = (props) => {
  console.log(props.toggleAccountModal())
  return (
    <div className='header-nav'>
      <div className='header-nav-top'>
        <div className='header-nav-user-icon' onClick={() => props.toggleAccountModal()}>
          <User />
        </div>
      </div>
    </div>
  );
}

export default connect(null, mapDispatchToProps)(HeaderNav);