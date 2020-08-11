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

    axios.post(`${process.env.API_URL}/auth/account-activation`, {
      token
    })
    .then()
    .catch(error => {
      console.log('Account Activation Error', error);
    });
  }

  render() {
    const { username, buttonText } = this.state;
    return (
      <>
        Hey, {username}, Are you ready to activate your account?
        <button onClick={(e) => this.handleSubmit(e)}>{buttonText}</button>
      </>
    );
  }
}

export default withNav(ActivateAccount);