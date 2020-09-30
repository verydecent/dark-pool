import React from 'react';
import Button from '../Button';

const Subheader = ({
  date,
  createTask
}) => {
  const formatDate = date.format('dddd LL');
  return (
    <div className='task-view-subheader'>
      <span className='task-view-date-title'>{formatDate}</span>
      <Button onClick={createTask}>
        Create Task
      </Button>
      <Button onClick={parsePrevDate}>
        Yesterday
      </Button>
      <Button onClick={parseNextDate}>
        Tomorrow
      </Button>
    </div>
  );
}

export default Subheader;