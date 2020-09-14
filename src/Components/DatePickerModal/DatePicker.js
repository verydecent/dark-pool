import React from 'react';
import './styles.css';
import shortid from 'shortid';

const DatePicker = ({
  getFirstDayOfMonth,
  getWeekdays,
  getDaysInMonth,
}) => {

  const weekdaysHeader = getWeekdays().map(day => {
    return (
      <th key={day} className='date-picker-header-cells'>
        {day}
      </th>
    )
  });

  // Days not in month
  const blanksInMonth = [];
  for (let d = 0; d < getFirstDayOfMonth(); d++) {
    blanksInMonth.push(
      <td key={d} className='date-picker-body-cells'></td>
    );
  }

  // Days in month
  const daysInMonth = [];
  for (let d = 1; d <= getDaysInMonth(); d++) {
    daysInMonth.push(
      <td key={shortid.generate()} className='date-picker-body-cells'>
        {d}
      </td>
    );
  }

  const totalSlots = [...blanksInMonth, ...daysInMonth];
  let rows = [];
  let cells = [];

  totalSlots.forEach((row, i) => {
    if (i % 7 === 0 && i !== 0) {
      console.log('push to rows');
      rows.push(cells); // when reach next week we contain all td in last week to rows 
      cells = []; // empty container 
      cells.push(row); // in current loop we still push current row to new container
    }
    else {
      console.log('push to cells');
      cells.push(row); // if index not equal 7 that means not go to next week
    }
    if (i === totalSlots.length - 1) { // when end loop we add remain date
      console.log('push rest to rows');
      rows.push(cells);
    }
  });

  const monthDaysBody = rows.map(d => {
    return <tr key={shortid.generate()} className='date-picker-body-cells'>{d}</tr>;
  });

  return (
    <div className='date-picker'>
      <div className='date-picker-container'>
        <table>
          <thead>
            <tr className='date-picker-weekdays-header'>
              {weekdaysHeader}
            </tr>
          </thead>
          <tbody className='date-picker-weekdays-body'>
            {monthDaysBody}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DatePicker;