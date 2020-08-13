import React from 'react';
import axios from 'axios';

class AccountView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: ""
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {

    const { username, password } = this.state;

    axios.post(`${process.env.API_URL}/user`, {
      username,
      password
    })
    .then(response => {
      console.log('Update User Information Success', response);
    })
    .catch(error => {
      console.log('Update User Information Error', error);
    })
  }

  render() {
    const { username, password } = this.state;

    return (
      <>
        <h1>Account View Component</h1>
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

export default AccountView;