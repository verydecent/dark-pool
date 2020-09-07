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
        <label>Description</label>
        <textarea
          placeholder='Describe your task'
          name='taskDescription'
          value={taskDescription}
          onChange={(e) => handleChange(e)}
        />
      </form>
    </div>
  );
}

export default Description;