import React from 'react';
import withNav from '../Hoc/withNav';
import axios from 'axios';
import { authenticate, isAuthenticated } from '../../../Utilities/helpers';
import { Redirect } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      buttonText: 'Login'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    console.log('cdm', this.props);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
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
      authenticate(response, () => {
        this.setState({ email: '', password: '', buttonText: 'Logging In...' });
        // Push admin to admin protected route
        isAuthenticated() && isAuthenticated().role === 'admin'
          ? this.props.history.push('/app/admin')
          : this.props.history.push('/app');
      });
    })
    .catch(error => {
      console.log('Error Logging In', error);
      this.setState({ buttonText: 'Login' });
    });
  }

  render() {
    const { email, password, buttonText } = this.state;

    return (
      <>
        {isAuthenticated() ? <Redirect to='/app' /> : null}
        <h1>LOGIN</h1>
        Login Component
        <form className='' onSubmit={(e) => this.handleSubmit(e)}>
         <input
           name='email'
           placeholder='email'
           value={email}
           type='text'
           onChange={(e) => this.handleChange(e)}
          />
          <input
            name='password'
            placeholder='password'
            value={password}
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
