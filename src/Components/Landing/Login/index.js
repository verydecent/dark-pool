import React from 'react';
import withNav from '../Hoc/withNav';
import axios from 'axios';
import { authenticate, isAuthenticated } from '../../../Utilities/helpers';
import { Redirect, Link } from 'react-router-dom';
import './styles.css';
import Wave from 'react-wavify';
import { connect } from 'react-redux';
import { toggleAuthModal } from '../../../Redux/actionCreators';
import AuthModal from '../../AuthModal';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      buttonText: 'Login',
      message: '',
      loading: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    const { email, password } = this.state;
    this.props.toggleAuthModal();
    this.setState({
      email: '', password: '', buttonText: 'Logging In...', message: 'Logging In...'
    }, () => {
      axios.post(`${process.env.API_URL}/auth/login`, {
        email,
        password
      })
        .then(response => {
          // Push user to dashboard route
          authenticate(response, () => {
            // Push admin to admin protected route
            this.props.toggleAuthModal();
            isAuthenticated() && isAuthenticated().role === 'admin'
              ? this.props.history.push('/app/admin')
              : this.props.history.push('/app');
          });
        })
        .catch(error => {
          console.log('Error Logging In', error);
          this.setState({ message: error.message, buttonText: 'Login' });
        });
    });
  }

  render() {
    const { email, password, buttonText } = this.state;
    const redirect = isAuthenticated() ? <Redirect to='/app' /> : null;

    return (
      <div className='home-wrapper'>
        <AuthModal message={this.state.message} />
        <div className='auth-section'>
          {redirect}
          <div className='login-container-1'>
            <h1 className='login-title'>Login</h1>
            <form className='' onSubmit={(e) => this.handleSubmit(e)}>
              <div className='login-action-container-1'>
                <label className='form-label' htmlFor=''>Email</label>
                <input
                  className='form-input'
                  name='email'
                  placeholder='email'
                  value={email}
                  type='text'
                  onChange={(e) => this.handleChange(e)}
                />
              </div>
              <div className='login-action-container-1'>
                <label className='form-label' htmlFor=''>Password</label>
                <input
                  className='form-input'
                  name='password'
                  placeholder='password'
                  value={password}
                  type='password'
                  onChange={(e) => this.handleChange(e)}
                />
              </div>
              <div className='login-action-container-1'>
                <button className='form-button'>{buttonText}</button>
              </div>
              <div className='login-action-container-2'>
                <Link to='/auth/password/forgot'>Forgot Password?</Link>
                <Link to='/register'>Need an account?</Link>
              </div>
            </form>
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

export default connect(null, mapDispatchToState)(withNav(Login));
