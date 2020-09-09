import React from 'react';
import './styles.css';
import { Times } from '../FAIcons/index';

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
      <div className='task-cell'>
        {title}
      </div>
      <div className='task-cell'>
        {title}
      </div>
      <div className='task-cell'>
        {title}
      </div>
      <div className='task-cell'>
        {title}
      </div>
    </div>
  );
}

export default Task;
