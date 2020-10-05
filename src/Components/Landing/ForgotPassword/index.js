import React from 'react';
import axios from 'axios';
import withNav from '../Hoc/withNav';

class ForgotPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { email } = this.state;

    axios.post(`${process.env.API_URL}/auth/forgot-password`, { email })
      .then(response => {
        console.log('Forgot password Request Success', response);
      })
      .catch(error => {
        console.log('Forgot password Request Error', error);
      });
  }

  render() {
    return (
      <div className='home-wrapper'>
        <div className='auth-section'>
          <div className='login-container-1'>
            <h1 className='login-title'>Forgot Password</h1>
            <form className='' onSubmit={e => this.handleSubmit(e)}>
              <div className='login-action-container-1'>
                <label className='form-label' htmlFor=''>Email</label>
                <input
                  className='form-input'
                  name='email'
                  placeholder='email'
                  value={this.state.email}
                  type='text'
                  onChange={e => this.handleChange(e)}
                />
              </div>
              <div className='login-action-container-1'>
                <button className='form-button'>Reset</button>
              </div>
            </form>
          </div>
        </div >
      </div >
    );
  }
}

export default withNav(ForgotPassword);