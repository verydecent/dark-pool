import React from 'react';
import { User } from '../FAIcons/index';
import './styles.css';
import { connect } from 'react-redux';
import { toggleAccountModal } from '../../Redux/actionCreators';
import AccountModal from '../AccountModal';

const HeaderNav = ({
  isAccountModalOpen,
  toggleAccountModal
}) => {
  return (
    <div className='header-nav'>
      {isAccountModalOpen && <AccountModal toggleAccountModal={toggleAccountModal} />}
      <div className='header-nav-top'>
        <div className='header-nav-user-icon' onClick={toggleAccountModal}>
          <User />
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    userId: state.userId,
    isAccountModalOpen: state.isAccountModalOpen
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleAccountModal: () => dispatch(toggleAccountModal())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderNav);