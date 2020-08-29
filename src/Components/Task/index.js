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

  console.log('props in Task Component', subtasks);

  return (
    <div
      className='collection-box'
      onClick={() => {
        toggleModal();
        selectTask(id, title, description, subtasks);
      }}>
      <div className='collection-box-container'>
        {title}
      </div>
    </div>
  );
}

export default Task;
