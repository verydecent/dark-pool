import React from 'react';

const ButtonContainer = ({
  // Values
  taskId,
  // Methods
  addSubtask,
  deleteTask
}) => {
  return (
    <div className='task-modal-button-container'>
      <button
        className='task-modal-button'
        onClick={(e) => addSubtask(e, taskId)}
      >
        Create Subtask
      </button>
      <button
        className='task-modal-button'
        onClick={() => deleteTask()}
      >
        Delete Task
      </button>
    </div>
  );
}

export default ButtonContainer;