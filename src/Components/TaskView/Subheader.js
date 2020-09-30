import React from 'react';
import Button from '../Button';
import { Calendar, AngleLeft, AngleRight } from '../FAIcons';

const Subheader = ({
  date,
  parseNextDate,
  parsePrevDate,
  toggleCalendarModal
}) => {
  const formatDate = date.format('dddd LL');
  return (
    <div className='task-view-subheader'>
      <span className='task-view-date-title'>
        {formatDate}
      </span>
      <div>
        <Button onClick={toggleCalendarModal}>
          <Calendar />
        </Button>
        <Button onClick={parsePrevDate}>
          <AngleLeft />
        </Button>
        <Button onClick={parseNextDate}>
          <AngleRight />
        </Button>
      </div>
    </div>
  );
}

export default Subheader;