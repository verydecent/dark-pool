import React from 'react';
import { Calendar, AngleLeft, AngleRight, Plus } from '../FAIcons';

const Subheader = ({
  date,
  parseNextDate,
  parsePrevDate,
  toggleCalendarModal,
  createTask
}) => {
  const formatDate = date.format('dddd LL');
  return (
    <div className='task-view-subheader'>
      <span className='task-view-date-title'>
        {formatDate}
      </span>
      <div className='task-view-button-container'>
        <button className='grey-button' onClick={parsePrevDate}>
          <AngleLeft />
        </button>
        <button className='grey-button' onClick={parseNextDate}>
          <AngleRight />
        </button>
        <button className='grey-button' onClick={toggleCalendarModal}>
          <Calendar />
        </button>
        <button className='grey-button plus' onClick={toggleCalendarModal}>
          <Plus />
        </button>
      </div>
    </div>
  );
}

export default Subheader;