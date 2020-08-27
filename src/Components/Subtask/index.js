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


const Subtask = ({

  id,
  complete,
  description,
  handleChangeSubtask,
  updateSubtask,
  deleteSubtask

}) => {

  console.log('Subtask Component Re-Render');

  return (
    <form onSubmit={(e) => updateSubtask(e, id, complete, description)}>
      <p style={{ color: '#fff', fontSize: 24 }}>{description}</p >
      {/* <input
          checked={complete}
          onChange={() => this.check(id)}
          name='complete'
          type='checkbox'
        /> */}
      <input
        value={description}
        name='description'
        onChange={(e) => handleChangeSubtask(e, id)}
      />

      <button>Update Subtask</button>
      {/* 
        <div onClick={() => deleteSubtask(this.props.id)}>
        <Times />
      </div> */}
    </form>
  );
}

export default Subtask;