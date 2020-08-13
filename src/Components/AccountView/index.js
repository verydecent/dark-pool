import React from 'react';
import axios from 'axios';
import withSideNav from '../Hoc/withSideNav';
import { getCookie, isAuthenticated } from '../../Utilities/helpers';

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
      console.log(email);
      this.setState({ username, email, role });
    })
    .catch(error => {
      console.log('Get User Info Error', error);
    })
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {

    const { username, password } = this.state;

    this.setState({ buttonText: 'Updating...' });

    axios.post(`${process.env.API_URL}/user/update`, {
      username,
      password
    })
    .then(response => {
      console.log('Update User Information Success', response);
      this.setState({ buttonText: 'Updated' });
    })
    .catch(error => {
      console.log('Update User Information Error', error);
      this.setState({ buttonText: 'Update' });
    })
  }

  render() {
    const { username, password, role, email, buttonText } = this.state;

    return (
      <>
        <h1>Account View Component</h1>
        <p>Update your user info</p>
        <table>
            <tr>
              <td>
                User Email ====
              </td>
              <td>
                {email}
              </td>
            </tr>
            <tr>
              <td>
                User Role ====
              </td>
              <td>
                {role}
              </td>
            </tr>
        </table>
        <form className='' onSubmit={(e) => this.handleSubmit(e)}>
         <input
           name='username'
           value={username}
           placeholder='username'
           type='text'
           onChange={(e) => this.handleChange(e)}
          />
          <input
            name='password'
            value={password}
            placeholder='password'
            type='password'
            onChange={(e) => this.handleChange(e)}
          />
          <button>{buttonText}</button>
        </form>
      </>
    );
  }
}

export default withSideNav(AccountView);