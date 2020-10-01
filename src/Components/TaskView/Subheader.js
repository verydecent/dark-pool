import React from 'react';
import { Calendar, AngleLeft, AngleRight, Plus } from '../FAIcons';

const Subheader = ({
  parseNextDate,
  parsePrevDate,
  toggleCalendarModal,
  createTask,
  sameDate
}) => {
  console.log(sameDate())
  return (
    <div className='task-view-subheader'>
      <div className='task-view-button-container'>
        <button className='task-view-button' onClick={parsePrevDate}>
          <AngleLeft />
        </button>
        <button className='task-view-button' onClick={parseNextDate}>
          <AngleRight />
        </button>
        <button className='task-view-button' onClick={toggleCalendarModal}>
          <Calendar />
        </button>
        <button className='task-view-button plus' onClick={createTask} disabled={!sameDate()}>
          <Plus />
        </button>
      </div>
    </div>
  );
}

export default Subheader;