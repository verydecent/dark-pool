import React from 'react';
import axios from 'axios';
import Subtask from '../Subtask';
import './styles.css';

class SubtaskList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subtaskDescription: '',
      subtasks: [],
    }
  }



  render() {
    return (
      <div className=''>

        {/* map out subtasks so it has to be from an array */}
        {/* dropdown mehtods with an id */}



      </div>
    );
  }
}

export default SubtaskList;