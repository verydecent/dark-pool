import React from 'react';
import withNav from '../Hoc/withNav';

class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value }, console.log(this.state));
  }

  render() {
    return (
      <>
        Register Component
        <form className=''>
          <input
           name='firstName'
           placeholder='First Name'
           type='text'
           onChange={(e) => this.handleChange(e)}
          />
          <input
           name='lastName'
           placeholder='Last Name'
           type='text'
           onChange={(e) => this.handleChange(e)}
          />
         <input
           name='email'
           placeholder='Email'
           type='text'
           onChange={(e) => this.handleChange(e)}
          />
          <input
            name='password'
            placeholder='Password'
            type='text'
            onChange={(e) => this.handleChange(e)}
          />
          <input
           name='confirmPassword'
           placeholder='Confirm Password'
           type='text'
           onChange={(e) => this.handleChange(e)}
          />
          <button>Log in</button>
        </form>
     </>
    );
  }
}


export default withNav(Register);
