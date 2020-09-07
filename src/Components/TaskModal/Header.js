import React from 'react';
import { Times } from '../FAIcons'

const Header = ({
  // Values
  taskId,
  taskTitle,
  // Methods
  handleChange,
  toggleModal,
  updateTask
}) => {
  return (
    <div className='task-modal-header'>
      <form
        className='task-modal-header-form'
        onSubmit={(e) => updateTask(e, taskId)}
        onBlur={(e) => updateTask(e, taskId)}
      >
        <input
          placeholder='Edit your task title by clicking here'
          name='taskTitle'
          value={taskTitle}
          onChange={(e) => handleChange(e)}
        />
      </form>
      <div onClick={() => toggleModal()}>
        <Times />
      </div>
    </div>
  );
}

export default Header;