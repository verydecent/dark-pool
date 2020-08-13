import React from 'react';
import axios from 'axios';
import withSideNav from '../Hoc/withSideNav';

class AccountView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: "",
      buttonText: "Update"
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    
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
    const { username, password, buttonText } = this.state;

    return (
      <>
        <h1>Account View Component</h1>
        <p>Update your user info</p>
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