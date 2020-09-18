import React from 'react';

const Header = ({
  createTask
}) => {
  return (
    <>
      <div className='task-view-header'>
        <div className='task-view-header-title'>
          <h1 className='header-1'>
            Task List
          </h1>
        </div>
      </div>
      <div className='task-view-header-cta'>
        <button className='task-view-button' onClick={() => createTask()}>
          Create Task
        </button>
      </div>
    </>
  );
}

export default Header;