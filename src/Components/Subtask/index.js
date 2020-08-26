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

  // componentDidMount() {
  //   axios.get(`http://localhost:3000/subtask/single/${this.props.id}`)
  //     .then(response => {
  //       console.log(response);
  //       response.data.description === undefined
  //         ? response.data.description = ""
  //         : null;
  //       this.setState({
  //         complete: response.data[0].complete,
  //         description: response.data[0].description
  //       });
  //     })
  //     .catch(error => console.log(error));
  // }

  // updateSubtask(e) {
  //   e.preventDefault();

  //   const updatedSubtask = {
  //     complete: this.state.complete,
  //     description: this.state.description
  //   };

  //   axios.put(`http://localhost:3000/subtask/${this.props.id}`, updatedSubtask)
  //     .then(response => {
  //       console.log(response);
  //       this.setState({
  //         complete: response.data.complete,
  //         description: response.data.description
  //       });
  //     })
  //     .catch(error => console.log(error));
  // }

  render() {
    const { deleteSubtask, updateSubtask } = this.props;
    const { complete, description } = this.state;
    console.log(this.props);

    return (
      <div>
        <form onSubmit={() => updateSubtask(complete, description)}>
          {/* Description */}
          {description}
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
        </form>
      </div>
    );
  }
}

export default Subtask;