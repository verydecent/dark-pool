import React from 'react';
import './styles.css';

const Task = ({
  // Values
  id,
  title,
  description,
  subtasks,
  // Methods
  toggleModal,
  selectTask
}) => {
  return (
    <div
      className='task'
      onClick={() => {
        toggleModal();
        selectTask(id, title, description, subtasks);
      }}>
      <div className=''>
        {title}
      </div>
    </div>
  );
}

export default Task;
