import React from 'react';
import { User } from '../FAIcons/index';
import './styles.css';
import { connect } from 'react-redux';
import { toggleAccountModal } from '../../Redux/actionCreators';
import AccountModal from '../AccountModal';
import { isAuthenticated } from '../../Utilities/helpers';

const HeaderNav = ({
  isAccountModalOpen,
  toggleAccountModal
}) => {
  return (
    <div className='header-nav'>
      {isAccountModalOpen && <AccountModal userId={isAuthenticated()._id} toggleAccountModal={toggleAccountModal} />}
      <div className='header-nav-top'>
        <span className='header-nav-username'>{isAuthenticated().username}</span>
        <span className='header-nav-user-icon' onClick={toggleAccountModal}>
          <User />
        </span>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    isAccountModalOpen: state.isAccountModalOpen
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleAccountModal: () => dispatch(toggleAccountModal())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderNav);