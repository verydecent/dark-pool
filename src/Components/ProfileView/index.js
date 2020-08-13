import React from 'react';
import axios from 'axios';

class ProfileView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    // const userId = this.props.match
    axios.get(`${process.env.API_URL}/user/${}`)
    .then(response => {
      console.log('Get User Info Success', response);
      // this.setState({ })
    })
    .catch(error => {
      console.log('Get User Info Error', error);
    })
  }

  render() {
    return (
      <>
        <h1>Profile View component</h1>
      </>
    );
  }
}

export default ProfileView;