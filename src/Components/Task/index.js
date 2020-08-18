import React from 'react';
import './styles.css';

const Task = ({
  // Values
  id,
  title,
  description,

  // Methods
  toggleModal,
  selectTask
}) => {

  return (
    <div className='collection-box' onClick={() => {
      toggleModal();
      selectTask(id, title, description);
      }}>
      <div className='collection-box-container'>
        {title}
      </div>
    </div>
  );
}

export default Task;
