import React from 'react';

const Description = ({
  // Values
  taskDescription,
  // Methods
  handleChange,
  updateTask
}) => {
  return (
    <div className='task-modal-description'>
      <form
        className='task-modal-description-form'
        onSubmit={(e) => updateTask(e)}
        onBlur={(e) => updateTask(e)}
      >
        <label>Description</label>
        <textarea
          name='taskDescription'
          value={taskDescription}
          onChange={(e) => handleChange(e)}
        />
      </form>
    </div>
  );
}

export default Description;