import React from 'react';
import { Calendar, AngleLeft, AngleRight, Plus } from '../FAIcons';

const Subheader = ({
  parseNextDate,
  parsePrevDate,
  toggleCalendarModal,
  createTask
}) => {
  return (
    <div className='task-view-subheader'>
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
        <button className='grey-button plus' onClick={createTask}>
          <Plus />
        </button>
      </div>
    </div>
  );
}

export default Subheader;