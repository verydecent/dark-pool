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
        <button className='grey-button' onClick={parsePrevDate}>
          <AngleLeft />
        </button>
        <button className='grey-button' onClick={parseNextDate}>
          <AngleRight />
        </button>
        <button className='grey-button' onClick={toggleCalendarModal}>
          <Calendar />
        </button>
      </div>
    </div>
  );
}

export default Subheader;