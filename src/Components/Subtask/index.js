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
  subtaskId,
  taskId,
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
        updateSubtask(taskId, subtaskId);
      }}
      onBlur={() => updateSubtask(id)}
    >
      <p style={{ color: '#fff', fontSize: 24 }}>{description}</p >
      <input
        checked={complete}
        onChange={(e) => toggleSubtask(e, subtaskId)}
        name='complete'
        type='checkbox'
      />
      <input
        value={description}
        name='description'
        onChange={(e) => handleChangeSubtask(e, subtaskId)}
      />

      <button>Update Subtask</button>
      {/* 
        <div onClick={() => deleteSubtask(subtaskId)}>
        <Times />
      </div> */}
    </form>
  );
}

export default Subtask;