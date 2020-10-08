import React from 'react';
import axios from 'axios';
import { isAuthenticated } from '../../../Utilities/helpers';
import withNav from '../Hoc/withNav';
import { Redirect, Link } from 'react-router-dom';
import './styles.css';
import Wave from 'react-wavify';
import AuthModal from '../../AuthModal';
import { connect } from 'react-redux';
import { toggleAuthModal } from '../../../Redux/actionCreators';

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
      message: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    // Prevents register-form from refreshing the page
    e.preventDefault();
    const { username, email, password, passwordConfirm } = this.state;
    console.log('Register API KEY ? =======>', process.env.API_URL)

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
            buttonText: 'Registered',
            message: 'Registration Success! Check your email.'
          });
          this.props.toggleAuthModal();
        })
        .catch(error => {
          console.log('Registration error', error.response);
          this.props.toggleAuthModal();
          this.setState({ buttonText: 'Register', message: response.message });
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
      <div className='home-wrapper'>
        <AuthModal message={this.state.message} />
        <div className='auth-section'>
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
                  <label className='register-form-label' htmlFor=''>Confirm Password</label>
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
        </div>
        <Wave fill='#418BCA'
          paused={false}
          options={{
            amplitude: 25,
            speed: .5,
            points: 3
          }}
        />
      </div>
    );
  }
}

const mapDispatchToState = dispatch => {
  return {
    toggleAuthModal: () => dispatch(toggleAuthModal())
  }
}

export default connect(null, mapDispatchToState)(withNav(Register));