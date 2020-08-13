import React from 'react';
import axios from 'axios';

class ResetPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newPassword: '',
      confirmPassword: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { newPassword, confirmPassword } = this.state;
    
    axios.post(`${process.env.API_URL}/auth/reset-password`, { email })
      .then(response => {
        console.log('Reset password Request Success', response);
      })
      .catch(error => {
        console.log('Reset password Request Error', error);
      });
  }

  render() {
    const { email } = this.state;
    return (
      <>
        <h1>Reset password</h1>

        <form className='' onClick={(e) => this.handleSubmit(e)}>
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

export default ResetPassword;