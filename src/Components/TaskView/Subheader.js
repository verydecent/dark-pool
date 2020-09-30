import React from 'react';
import Button from '../Button';
import { Calendar } from '../FAIcons';

const Subheader = ({
  date,
  parseNextDate,
  parsePrevDate,
  toggleCalendarModal
}) => {

  console.log(toggleCalendarModal)
  const formatDate = date.format('dddd LL');
  return (
    <div className='task-view-subheader'>
      <span className='task-view-date-title'>
        <Button onClick={toggleCalendarModal}>
          <Calendar />
        </Button>
        {formatDate}
      </span>
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