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
  // Values
  subtask_id,
  complete,
  description,
  // Methods
  handleChangeSubtask,
  toggleSubtask,
  updateSubtask,
  deleteSubtask
}) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        updateSubtask(task_id, subtask_id);
      }}
      onBlur={() => updateSubtask(id)}
    >
      <p style={{ color: '#fff', fontSize: 24 }}>{description}</p >
      <input
        checked={complete}
        onChange={(e) => toggleSubtask(e, subtask_id)}
        name='complete'
        type='checkbox'
      />
      <input
        value={description}
        name='description'
        onChange={(e) => handleChangeSubtask(e, subtask_id)}
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