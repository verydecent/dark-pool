import React from 'react';
import withNav from '../Hoc/withNav';
import axios from 'axios';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      buttonText: 'Login'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value }, console.log(this.state));
  }

  handleSubmit(e) {
    e.preventDefault();

    const { email, password } = this.state;

    axios.post(`${process.env.API_URL}/auth/login`, {
      email,
      password
    })
    .then(response => {
      // Push user to dashboard route
      console.log('Login Success', response);
      this.setState({ email: '', password: '', buttonText: 'Logging In...' });
    })
    .catch(error => {
      console.log('Error Logging In', error);
      this.setState({ buttonText: 'Login' });
    });
  }

  render() {
    const { buttonText } = this.state;

    return (
      <>
        <h1>LOGIN</h1>
        {JSON.stringify(this.state)}
        Login Component
        <form className='' onSubmit={(e) => this.handleSubmit(e)}>
         <input
           name='email'
           placeholder='email'
           type='text'
           onChange={(e) => this.handleChange(e)}
          />
          <input
            name='password'
            placeholder='password'
            type='password'
            onChange={(e) => this.handleChange(e)}
          />

          <button>{buttonText}</button>
        </form>
     </>
    );
  }
}

export default withNav(Login);
