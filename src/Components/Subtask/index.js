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
    <div className='subtask'>
      <form
        className='subtask-form'
        onSubmit={(e) => {
          e.preventDefault();
          updateSubtask(taskId, subtaskId);
        }}
        onBlur={(e) => {
          e.preventDefault();
          updateSubtask(taskId, subtaskId);
        }}
      >
        <input
          className='subtask-checkbox'
          checked={complete}
          onChange={(e) => toggleSubtask(e, taskId, subtaskId)}
          name='complete'
          type='checkbox'
        />
        <input
          className='subtask-input'
          value={description}
          name='description'
          onChange={(e) => handleChangeSubtask(e, subtaskId)}
        />

        <div
          className='subtask-exit-container'
          onClick={() => deleteSubtask(taskId, subtaskId)}>
          <Times />
        </div>
      </form>
    </div>
  );
}

export default Subtask;