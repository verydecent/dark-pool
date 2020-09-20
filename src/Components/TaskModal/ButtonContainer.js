import React from 'react';
import Button from '../Button';

const ButtonContainer = ({
  // Values
  taskId,
  // Methods
  addSubtask,
  deleteTask
}) => {
  return (
    <div className='task-modal-button-container'>
      <button className='task-modal-button delete' onClick={() => deleteTask(taskId)}>
        Delete Task
      </button>
      <button className='task-modal-button create' onClick={(e) => addSubtask(e, taskId)}>
        Create Subtask
      </button>
    </div>
  );
}

export default ButtonContainer;