import React from 'react';
import Button from '../Button';

const Header = ({
  createTask
}) => {
  return (
    <>
      <div className='task-view-header'>
        <h1 className='header-1'>
          Tasks
        </h1>
        <Button onClick={createTask}>
          Create Task
        </Button>
      </div>
    </>
  );
}

export default Header;