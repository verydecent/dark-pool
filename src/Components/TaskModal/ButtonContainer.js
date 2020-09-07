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
      <button className='task-modal-button' onClick={() => deleteTask(taskId)}>
        Delete Task
      </button>
      <button className='task-modal-button' onClick={(e) => addSubtask(e, taskId)}>
        Create Subtask
      </button>
    </div>
  );
}

export default ButtonContainer;