import React from 'react';
import './styles.css';
import { AngleLeft, AngleRight } from '../FAIcons';

const DateView = ({
  date,
  parseNextDate,
  parsePrevDate
}) => {

  const formatDate = date.format('LL');

  return (
    <div className='date-view'>
      {formatDate}
      <div>
        <button onClick={(e) => parsePrevDate(e)}>
          <AngleLeft />
        </button>
        <button onClick={(e) => parseNextDate(e)}>
          <AngleRight />
        </button>
      </div>
    </div>
  );
}

export default DateView;