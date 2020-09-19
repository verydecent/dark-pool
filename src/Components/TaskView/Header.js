import React from 'react';

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
        <button className='task-view-button' onClick={() => createTask()}>
          Create Task
        </button>
      </div>
      {/* <div className='task-view-header-cta'>
      </div> */}
    </>
  );
}

export default Header;