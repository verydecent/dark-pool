import React from 'react';
import './styles.css';
import { AngleLeft, AngleRight } from '../FAIcons';

const DateView = ({
  date,
  parseNextDate,
  parsePrevDate
}) => {
  return (
    <div className='date-view'>
      <div>
        {date}
      </div>
      <div>
        <button onClick={(e) => parsePrevDate(e)}>
          <AngleLeft /> Go To Previous Date
        </button>
        <button onClick={(e) => parseNextDate(e)}>
          <AngleRight /> Go To Next Date
        </button>
      </div>
    </div>
  );
}

export default DateView;