import React from 'react';
import axios from 'axios';
import withNav from '../Hoc/withNav';
import { getCookie, isAuthenticated, logout, updateUser } from '../../Utilities/helpers';
import './styles.css';

class AccountView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      username: "",
      password: "",
      role: "",
      buttonText: "Update"
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    // Get user's ID from localStorage helper
    const id = isAuthenticated()._id;
    // Get JWT from cookie
    const token = getCookie('token');

    axios.get(`${process.env.API_URL}/user/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => {
        console.log('Get User Info Success', response);
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

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
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
      <div className='account-view'>
        <h1>Account Information</h1>
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
            placeholder='username'
            type='text'
            onChange={(e) => this.handleChange(e)}
          />
          <label>Password</label>
          <input
            name='password'
            value={password}
            placeholder='password'
            type='password'
            onChange={(e) => this.handleChange(e)}
          />
          <button>{buttonText}</button>
        </form>
      </div>
    );
  }
}

export default withNav(AccountView);