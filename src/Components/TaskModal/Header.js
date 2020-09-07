import React from 'react';
import { Times } from '../FAIcons'

const Header = ({
  // Values
  taskTitle,
  // Methods
  toggleModal
}) => {
  return (
    <div className='task-modal-header'>
      <span>{taskTitle}</span>
      <div onClick={() => toggleModal()}>
        <Times />
      </div>
    </div>
  );
}

export default Header;