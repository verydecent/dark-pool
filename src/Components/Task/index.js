import React from 'react';
import './styles.css';

const Task = ({
  taskTitle,
  taskDescription,
  toggleModal
}) => {
  return (
    <div className='collection-box' onClick={() => toggleModal()}>
      <div className='collection-box-container'>
        {taskTitle}
      </div>
    </div>
  );
}

export default Task;
