import React from 'react';
import './styles.css';

const Task = ({
  toggleModal
}) => {
  return (
    <div className='collection-box' onClick={() => toggleModal()}>
      <div className='collection-box-container'>
        Task Component!
      </div>
    </div>
  );
}

export default Task;
