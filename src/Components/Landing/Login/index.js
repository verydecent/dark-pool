import React from 'react';
import withNav from '../Hoc/withNav';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
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
        Login Component
        <form className=''>
         <input
           name='username'
           placeholder='username'
           type='text'
           onChange={(e) => this.handleChange(e)}
          />
          <input
            name='password'
            placeholder='password'
            type='password'
            onChange={(e) => this.handleChange(e)}
          />

          <button>Log in</button>
        </form>
     </>
    );
  }
}

export default withNav(Login);
