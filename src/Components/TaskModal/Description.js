import React from 'react';

const Description = ({
  // Values
  taskId,
  taskDescription,
  // Methods
  handleChange,
  updateTask
}) => {
  return (
    <div className='task-modal-description'>
      <form
        className='task-modal-description-form'
        onSubmit={(e) => updateTask(e, taskId)}
        onBlur={(e) => updateTask(e, taskId)}
      >
        <textarea
          placeholder='Task Description'
          name='taskDescription'
          value={taskDescription}
          onChange={(e) => handleChange(e)}
        />
      </form>
    </div>
  );
}

export default Description;