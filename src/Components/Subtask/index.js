import React from 'react';
import { Times } from '../FAIcons';
import './styles.css';


// Class component
// componentDidMount will pull the values of the Subtask such as complete, description, id etc.
// Each subtask will have it's own state to load into and will be responsible for it's own input value and complete values

// * Update *
// Need to redo this whole thing, it pretty much failed, going to move past this leaving it uneditable for now
// and then I'll focus on styling then come back to it


const Subtask = ({
  // Values
  taskId,
  subtaskId,
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
      onBlur={(e) => {
        e.preventDefault();
        updateSubtask(taskId, subtaskId);
      }}
    >
      <p style={{ color: '#fff', fontSize: 20 }}>{description}</p >
      <input
        checked={complete}
        onChange={(e) => toggleSubtask(e, taskId, subtaskId)}
        name='complete'
        type='checkbox'
      />
      <input
        value={description}
        name='description'
        onChange={(e) => handleChangeSubtask(e, subtaskId)}
      />

      <button>Update Subtask</button>

      <div onClick={() => deleteSubtask(taskId, subtaskId)}>
        <Times />
      </div>
    </form>
  );
}

export default Subtask;