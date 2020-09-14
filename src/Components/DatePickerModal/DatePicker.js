import React from 'react';
import './styles.css';
import moment, { weekdaysShort } from 'moment';

const DatePicker = ({
  getFirstDayOfMonth,
  getWeekdays
}) => {
  const weekdaysHeader = getWeekdays().map(day => {
    return (
      <th key={day} className='date-picker-weekdays'>
        {day}
      </th>
    )
  });

  return (
    <div className='date-picker'>
      <div className='date-picker-container'>
        <div className='date-picker-weekdays-header'>
          {weekdaysHeader}
        </div>
      </div>
    </div>
  );
}

export default DatePicker;