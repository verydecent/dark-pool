import React from 'react';
import Button from '../Button';

const Subheader = ({
  date,
  createTask,
  parseNextDate,
  parsePrevDate
}) => {
  const formatDate = date.format('dddd LL');
  return (
    <div className='task-view-subheader'>
      <span className='task-view-date-title'>{formatDate}</span>
      <div>
        <Button onClick={parsePrevDate}>
          Yesterday
      </Button>
        <Button onClick={parseNextDate}>
          Tomorrow
      </Button>
      </div>
    </div>
  );
}

export default Subheader;