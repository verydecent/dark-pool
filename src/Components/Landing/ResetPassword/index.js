import React from 'react';
import axios from 'axios';
import jwt from 'jsonwebtoken';
import withNav from '../Hoc/withNav';

class ResetPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      token: '',
      newPassword: '',
      confirmPassword: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const token = this.props.match.params.token;
    const { username } = jwt.decode(token);

    this.setState({ username, token });
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    console.log('sub')
    e.preventDefault();
    const { newPassword, token } = this.state;
    
    axios.post(`${process.env.API_URL}/auth/reset-password`, { newPassword, resetPasswordLink: token })
      .then(response => {
        console.log('Reset password Request Success', response);
      })
      .catch(error => {
        console.log('Reset password Request Error', error);
      });
  }

  render() {
    const { username, newPassword, confirmPassword } = this.state;
    return (
      <>
        <h1>Hey {username}, reset your password</h1>

        <form className='' onSubmit={(e) => this.handleSubmit(e)}>
          <input 
            name='newPassword'
            value={newPassword}
            onChange={(e) => this.handleChange(e)}
          />
          <input 
            name='confirmPassword'
            value={confirmPassword}
            onChange={(e) => this.handleChange(e)}
          />
          <button>Submit</button>
        </form>
      </>
    );
  }
}

export default withNav(ResetPassword);