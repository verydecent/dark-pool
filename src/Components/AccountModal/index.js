import React from 'react';
import axios from 'axios';
import { getCookie, isAuthenticated, logout, updateUser } from '../../Utilities/helpers';
import Button from '../Button';
import './styles.css';
import { Times } from '../FAIcons';

class AccountModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      username: "",
      password: "",
      role: "",
      buttonText: "Update"
    }
  }

  componentDidMount() {
    // Get JWT from cookie
    const token = getCookie('token');

    axios.get(`${process.env.API_URL}/user/${this.props.userId}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => {
        const { email, username, role } = response.data;
        this.setState({ username, email, role });
      })
      .catch(error => {
        console.log('Get User Info Error', error);

        // In the case that request is made with an expired token (aka 401 unauthorized), we will redirect the user to the landing page
        if (error.response.status === 401) {
          logout(() => {
            this.props.history.push('/');
          });
        }
      })
  }

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    const token = getCookie('token');

    this.setState({ buttonText: 'Updating...' });
    axios.put(`${process.env.API_URL}/user`, {
      username,
      password
    }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => {
        console.log('Update User Information Success', response);
        updateUser(response, () => {
          this.setState({ buttonText: 'Updated' });
        });
      })
      .catch(error => {
        console.log('Update User Information Error', error.response.data.error);
        this.setState({ buttonText: 'Update' });
      })
  }

  render() {
    const { username, password, role, email, buttonText } = this.state;
    return (
      <div className='account-modal'>
        {/* Overlay */}
        <div className='account-modal-overlay' onClick={this.props.toggleAccountModal} />

        <div className='account-view'>
          <div className='account-view-header'>
            <h1 className='header-1'>My Account Settings</h1>
            <div onClick={this.props.toggleAccountModal}>
              <Times />
            </div>
          </div>
          <form
            className='account-view-form'
            onSubmit={(e) => this.handleSubmit(e)}
          >
            <label>Email</label>
            <input
              name='email'
              value={email}
              type='text'
              disabled={true}
              onChange={(e) => this.handleChange(e)}
            />
            <label>Role</label>
            <input
              name='role'
              value={role}
              type='text'
              disabled={true}
              onChange={(e) => this.handleChange(e)}
            />
            <label>Username</label>
            <input
              name='username'
              value={username}
              type='text'
              onChange={(e) => this.handleChange(e)}
            />
            <label>Password</label>
            <input
              name='password'
              value={password}
              type='password'
              onChange={(e) => this.handleChange(e)}
            />
            <div className='account-view-button-container'>
              <Button>{buttonText}</Button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default AccountModal;