import React from 'react';
import { User } from '../FAIcons/index';
import './styles.css';
import { connect } from 'react-redux';
import { toggleAccountModal } from '../../Redux/actionCreators';
import AccountModal from '../AccountModal';

const HeaderNav = ({
  userId,
  username,
  isAccountModalOpen,
  toggleAccountModal
}) => {
  return (
    <div className='header-nav'>
      {isAccountModalOpen && <AccountModal userId={userId} toggleAccountModal={toggleAccountModal} />}
      <div className='header-nav-top'>
        <span className='header-nav-username'>{username}</span>
        <span className='header-nav-user-icon' onClick={toggleAccountModal}>
          <User />
        </span>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    userId: state.userId,
    username: state.username,
    isAccountModalOpen: state.isAccountModalOpen
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleAccountModal: () => dispatch(toggleAccountModal())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderNav);