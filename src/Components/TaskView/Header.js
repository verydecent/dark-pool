import React from 'react';
import Button from '../Button';
import { Plus } from '../FAIcons';

const Header = ({
  createTask
}) => {
  return (
    <div className='task-view-header'>
      <h1 className='header-1'>
        Tasks
      </h1>
      <Button onClick={createTask}>
        <Plus />
      </Button>
    </div>
  );
}

export default Header;