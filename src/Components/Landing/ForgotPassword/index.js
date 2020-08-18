import React from 'react';
import axios from 'axios';
import withNav from '../Hoc/withNav';

class ForgotPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { email } = this.state;
    
    axios.post(`${process.env.API_URL}/auth/forgot-password`, { email })
      .then(response => {
        console.log('Forgot password Request Success', response);
      })
      .catch(error => {
        console.log('Forgot password Request Error', error);
      });
  }

  render() {
    const { email } = this.state;
    return (
      <>
        <h1>Forgot password</h1>

        <form className='' onSubmit={(e) => this.handleSubmit(e)}>
          <input 
            name='email'
            value={email}
            onChange={(e) => this.handleChange(e)}
          />
          <button>Submit</button>
        </form>
      </>
    );
  }
}

export default withNav(ForgotPassword);