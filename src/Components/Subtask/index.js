import React from 'react';
import { Times } from '../FAIcons';
import axios from 'axios';
import './styles.css';


// Class component
// componentDidMount will pull the values of the Subtask such as complete, description, id etc.
// Each subtask will have it's own state to load into and will be responsible for it's own input value and complete values

// * Update *
// Need to redo this whole thing, it pretty much failed, going to move past this leaving it uneditable for now
// and then I'll focus on styling then come back to it


class Subtask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      complete: false,
      description: ''
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    console.log('subtask props', this.props);

    const {
      id,
      complete,
      description,
      handleChangeSubtask,
      updateSubtask,
      deleteSubtask
    } = this.props;

    return (
      <div>
        <p style={{ color: 'fff', fontSize: 24 }}>
          {this.props.description}
        </p>
        {/* <input
          checked={complete}
          onChange={() => this.check(id)}
          name='complete'
          type='checkbox'
        /> */}
        <form onSubmit={(e) => updateSubtask(e, id, complete, description)}>
          <input
            value={description}
            name='description'
            onChange={(e) => handleChangeSubtask(e)}
          />

          <button>Update Subtask</button>
        </form>
        {/* 
        <div onClick={() => deleteSubtask(this.props.id)}>
          <Times />
        </div> */}
      </div>
    );
  }
}

export default Subtask;