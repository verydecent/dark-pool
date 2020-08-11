import React from 'react';
import withNav from '../Hoc/withNav';
import axios from 'axios';

class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      buttonText: 'Register',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value }, console.log(this.state));
  }

  handleSubmit(e) {
    // Prevents form from refreshing the page
    e.preventDefault();
    this.setState({ buttonText: 'Registering...' });

    const { username, email, password } = this.state;

    // axios.post(`${process.env.REACT_APP_API_URL}/register`, { username, email, password })
    axios.post(`${process.env.API_URL}/auth/register`, { username, email, password })
      .then(response => {
        console.log('Registration Success', response);
        this.setState({ username: '', email: '', password: '', buttonText: 'Registered' })
      })
      .catch(error => {
        console.log('Registration error', error.response);
        this.setState({ buttonText: 'Register' });
      });
  }

  render() {
    const {
      username,
      email,
      password,
      confirmPassword,
      buttonText
    } = this.state;

    return (
      <>
        <h1>REGISTER</h1>
        {JSON.stringify(this.state)}
        Register Component
        <form className='' onSubmit={(e) => this.handleSubmit(e)}>
          <input
           name='username'
           placeholder='Username'
           type='text'
           value={username}
           onChange={(e) => this.handleChange(e)}
          />
         <input
           name='email'
           placeholder='Email'
           type='text'
           value={email}
           onChange={(e) => this.handleChange(e)}
          />
          <input
            name='password'
            placeholder='Password'
            type='password'
            value={password}
            onChange={(e) => this.handleChange(e)}
          />
          <input
           name='confirmPassword'
           placeholder='Confirm Password'
           type='password'
           value={confirmPassword}
           onChange={(e) => this.handleChange(e)}
          />
          <button>{buttonText}</button>
        </form>
     </>
    );
  }
}


export default withNav(Register);
