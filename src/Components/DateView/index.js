import React from 'react';
import './styles.css';
import { AngleLeft, AngleRight } from '../FAIcons';

const DateView = ({
  date,
  parseNextDate,
  parsePrevDate
}) => {

  const currentDate = date.format('LL');

  return (
    <div className='date-view'>
      <h1 className='header-1'>
        {currentDate}
      </h1>
      <div>
        <button className='task-view-button' onClick={(e) => parsePrevDate(e)}>
          {/* <AngleLeft /> */}
          Yesterday
        </button>
        <button className='task-view-button' onClick={(e) => parseNextDate(e)}>
          {/* <AngleRight /> */}
          Tomorrow
        </button>
      </div>
    </div>
  );
}

export default DateView;