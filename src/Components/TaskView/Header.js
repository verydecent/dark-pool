import React from 'react';
import Button from '../Button';

const Header = ({
  createTask
}) => {
  return (
    <>
      <div className='task-view-header'>
        <div className='task-view-header-title'>
          <h1 className='header-1'>
            Tasks
          </h1>
        </div>
        <Button onClick={createTask}>
          Create Task
        </Button>
      </div>
    </>
  );
}

export default Header;