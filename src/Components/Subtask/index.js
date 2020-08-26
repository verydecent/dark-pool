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
    this.check = this.check.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  check(id) {
    // e.preventDefault();
    // this.setState(prevState => ({ ...prevState, complete: !prevState.complete }));
    this.setState(prevState => {

      return {
        ...prevState,
        complete: !prevState.complete
      }
    },
      () => {
        this.props.toggleSubtask(id, this.state.complete, this.state.description)
      }
    );
  }

  render() {
    const { id, deleteSubtask } = this.props;
    const { complete, description } = this.state;

    console.log('this is the latest complete check', complete);
    return (
      <div>
        <p stlye={{ color: 'fff', fontSize: 24 }}>
          {this.props.description}
        </p>
        <input
          checked={complete}
          onChange={() => this.check(id)}
          // value={complete}
          name='complete'
          type='checkbox'
        />
        {/* <form onSubmit={(e) => updateSubtask(e, id, complete, description)}> */}
        {/* Description */}
        <input
          value={description}
          name='description'
          onChange={(e) => this.handleChange(e)}
        />

        <button>Update Subtask</button>

        {/* Close button */}
        <div onClick={() => deleteSubtask(this.props.id)}>
          <Times />
        </div>
        {/* </form> */}
      </div>
    );
  }
}

export default Subtask;