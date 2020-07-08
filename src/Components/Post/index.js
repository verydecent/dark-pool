import React from 'react';

class Post extends React.Component {
  constructor() {
    super();
    this.state = {
      noteTitle: '',
    };
  
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    console.log('CDM');
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div className='post'>
        Post Class Component
        <input 
          value={this.state.notetitle}
          name='noteTitle'
          onChange={this.handleChange}
          placeholder='Post your note title'
        />
        
        {this.state.noteTitle}
      </div>
    );
  }
}
  
export default Post;
