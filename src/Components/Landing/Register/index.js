import React from 'react';
import withNav from '../Hoc/withNav';

class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      buttonText: 'Register',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value }, console.log(this.state));
  }

  handleSubmit(e) {
    console.log('handleSubmit()');

    // Prevents form from refreshing the page
    e.preventDefault();
    this.setState({ buttonText: 'Registering...' });
  }

  render() {
    const {
      username,
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      buttonText
    } = this.state;

    return (
      <>
        {JSON.stringify(this.state)}
        Register Component
        <form className=''>
          <input
           name='username'
           placeholder='Username'
           type='text'
           value={username}
           onChange={(e) => this.handleChange(e)}
          />
          <input
           name='firstName'
           placeholder='First Name'
           type='text'
           value={firstName}
           onChange={(e) => this.handleChange(e)}
          />
          <input
           name='lastName'
           placeholder='Last Name'
           type='text'
           value={lastName}
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
            type='text'
            value={password}
            onChange={(e) => this.handleChange(e)}
          />
          <input
           name='confirmPassword'
           placeholder='Confirm Password'
           type='text'
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
