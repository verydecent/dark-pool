import React from 'react';
import axios from 'axios';
import jwt from 'jsonwebtoken';
import withNav from '../Hoc/withNav';
import Wave from 'react-wavify';

class ResetPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      token: '',
      newPassword: '',
      confirmPassword: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const token = this.props.match.params.token;
    const { username } = jwt.decode(token);

    this.setState({ username, token });
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    console.log('sub')
    e.preventDefault();
    const { newPassword, token } = this.state;

    axios.post(`${process.env.API_URL}/auth/reset-password`, { newPassword, resetPasswordLink: token })
      .then(response => {
        console.log('Reset password Request Success', response);
      })
      .catch(error => {
        console.log('Reset password Request Error', error);
      });
  }

  render() {
    const { username, newPassword, confirmPassword } = this.state;
    return (
      <div className='home-wrapper'>
        <div className='auth-section'>

          <div className='login-container-1'>
            <h1 className='login-title'>Hey {username}, reset your password</h1>
            <form className='' onSubmit={e => this.handleSubmit(e)}>
              <div className='login-action-container-1'>
                <label className='form-label' htmlFor=''>New Password</label>
                <input
                  className='form-input'
                  name='newPassword'
                  value={newPassword}
                  type='password'
                  onChange={(e) => this.handleChange(e)}
                />
              </div>
              <div className='login-action-container-1'>
                <label className='form-label' htmlFor=''>Confirm Password</label>
                <input
                  className='form-input'
                  name='confirmPassword'
                  value={confirmPassword}
                  type='password'
                  onChange={(e) => this.handleChange(e)}
                />
              </div>
              <div className='login-action-container-1'>
                <button className='form-button'>Reset</button>
              </div>
            </form>
          </div>
        </div>
        <div className='wave-section'>
          <Wave fill='#418BCA'
            paused={false}
            options={{
              amplitude: 25,
              speed: .5,
              points: 3
            }}
          />
        </div>
      </div>
    );
  }
}

export default withNav(ResetPassword);