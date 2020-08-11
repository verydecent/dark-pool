import React from 'react';
import axios from 'axios';
import withNav from '../Hoc/withNav';
import jwt from 'jsonwebtoken';

class ActivateAccount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      token: '',
      visible: true,
      buttonText: 'Activate Account'
    }
  }

  componentDidMount() {
    const token = this.props.match.params.token;
    const { username } = jwt.decode(token);
    console.log(token);
    if (token) this.setState({ username, token });
  }

  handleSubmit(e) {
    const { token } = this.state;

    this.setState({ buttonText: 'Activating...' });

    axios.post(`${process.env.API_URL}/auth/account-activation`, {
      token
    })
    .then(response => {
      console.log('Account Activation Success', response);
      this.setState({ visible: false, buttonText: 'Account Activated' });
    })
    .catch(error => {
      console.log('Account Activation Error', error);
    });
  }

  render() {
    const { username, visible, buttonText } = this.state;

    const title = visible ? <h1>Hey, {username}, Are you ready to activate your account?</h1> : <h1>Your account was successfully activated! You can now login!</h1>;
    return (
      <>
        {title}
        <button disabled={!visible} onClick={(e) => this.handleSubmit(e)}>{buttonText}</button>
      </>
    );
  }
}

export default withNav(ActivateAccount);