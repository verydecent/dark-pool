import React from 'react';

const Header = ({
  createTask
}) => {
  return (
    <>
      <div className='task-view-header'>
        <div className='task-view-header-title'>
          Task List
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