import React from 'react';
import withNav from '../Hoc/withNav';

class Login extends React.Component {
  render() {
    return (
      <>
        Login Component

        <input placeholder='username' type='text' />
        <input placeholder='password' type='text' />
      </>
    );
  }
}

export default withNav(Login);
