import React from 'react';
import axios from 'axios';
import { isAuthenticated } from '../../../Utilities/helpers';
import withNav from '../Hoc/withNav';
import { Redirect, Link } from 'react-router-dom';
import './styles.css';

class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      email: '',
      password: '',
      passwordConfirm: '',
      doesPasswordConfirm: true,
      buttonText: 'Register',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value }, console.log(this.state));
  }

  handleSubmit(e) {
    // Prevents register-form from refreshing the page
    e.preventDefault();
    const { username, email, password, passwordConfirm } = this.state;

    if (password !== passwordConfirm) {
      this.setState({ doesPasswordConfirm: false });
    }
    else {
      this.setState({ buttonText: 'Registering...' });
      axios.post(`${process.env.API_URL}/auth/register`, { username, email, password })
        .then(response => {
          console.log('Registration Success', response);
          this.setState({
            username: '',
            email: '',
            password: '',
            passwordConfirm: '',
            buttonText: 'Registered'
          })
        })
        .catch(error => {
          console.log('Registration error', error.response);
          this.setState({ buttonText: 'Register' });
        });
    }

  }

  render() {
    const {
      username,
      email,
      password,
      passwordConfirm,
      buttonText,
      doesPasswordConfirm
    } = this.state;
    const redirect = isAuthenticated() ? <Redirect to='/app' /> : null;
    const passwordConfirmaMessage = !doesPasswordConfirm && <div className='register-action-container-1'>
      <p style={{ color: 'red', textAlign: 'center' }}>*Required: Password and Password Confirm match & Password length is at least 6 characters in length</p>
    </div>

    return (
      <>
        {redirect}
        <div className='register-container-1'>
          <div className='register-container-2'>
            <h1 className='register-title'>Register</h1>
            < form className='' onSubmit={(e) => this.handleSubmit(e)}>
              <div className='register-action-container-1'>
                <label className='register-form-label' htmlFor=''>Username</label>
                <input
                  className='register-form-input'
                  name='username'
                  placeholder='username'
                  value={username}
                  type='text'
                  onChange={(e) => this.handleChange(e)}
                />
              </div>
              <div className='register-action-container-1'>
                <label className='register-form-label' htmlFor=''>Email</label>
                <input
                  className='register-form-input'
                  name='email'
                  placeholder='email'
                  value={email}
                  type='text'
                  onChange={(e) => this.handleChange(e)}
                />
              </div>
              <div className='register-action-container-1'>
                <label className='register-form-label' htmlFor=''>Password</label>
                <input
                  className='register-form-input'
                  name='password'
                  placeholder='password'
                  value={password}
                  type='password'
                  onChange={(e) => this.handleChange(e)}
                />
              </div>
              <div className='register-action-container-1'>
                <label className='register-form-label' htmlFor=''>Password Confirm</label>
                <input
                  className='register-form-input'
                  name='passwordConfirm'
                  placeholder='Password Confirmation'
                  value={passwordConfirm}
                  type='password'
                  onChange={(e) => this.handleChange(e)}
                />
              </div>
              {passwordConfirmaMessage}
              <div className='register-action-container-1'>
                <button className='register-form-button'>{buttonText}</button>
              </div>
              <div className='register-action-container-2'>
                <Link to='/login'>Already registered?</Link>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}


export default withNav(Register);
