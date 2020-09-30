import React from 'react';

const Header = ({
  date
}) => {
  return (
    <div className='task-view-header'>
      <h1 className='header-1'>
        Tasks
      </h1>
      <span className='date-title'>
        {date}
      </span>
    </div>
  );
}

export default Header;