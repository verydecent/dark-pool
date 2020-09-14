import React from 'react';
import './styles.css';
import shortid from 'shortid';

const DatePicker = ({
  getFirstDayOfMonth,
  getWeekdays,
  getAllMonths,
  getDaysInMonth,
  getToday,
  getMonth
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
      <td key={d} className='date-picker-body-cells blank'></td>
    );
  }

  // Days in month
  const daysInMonth = [];
  for (let d = 1; d <= getDaysInMonth(); d++) {
    const today = d == getToday() ? 'today' : '';

    daysInMonth.push(
      <td key={shortid.generate()} className={`date-picker-body-cells ${today}`}>
        {d}
      </td>
    );
  }

  // Combining all togehter
  const totalSlots = [...blanksInMonth, ...daysInMonth];
  let rows = [];
  let cells = [];

  totalSlots.forEach((row, i) => {
    if (i % 7 !== 0 || i === 0) {
      cells.push(row); // if index not equal 7 that means not go to next week
    }
    else {
      rows.push(cells); // when reach next week we contain all td in last week to rows 
      cells = []; // empty container 
      cells.push(row); // in current loop we still push current row to new container
    }
    if (i === totalSlots.length - 1) { // when end loop we add remain date
      rows.push(cells);
    }
  });

  const monthDaysBody = rows.map(d => {
    return <tr key={shortid.generate()} className='date-picker-body-cells'>{d}</tr>;
  });

  // Creating Month selector
  const months = [];
  getAllMonths().map(month => {
    months.push(
      <td>{month}</td>
    );
  });

  let monthRows = [];
  let monthCells = [];

  months.forEach((row, i) => {
    if (i % 3 !== 0 || i == 0) {
      monthCells.push(monthRows);
    }
    else {
      monthRows.push(monthCells);
      monthCells = [];
      monthCells.push(row);
    }
  });

  console.log(months);

  return (
    <div className='date-picker'>
      <div className='date-picker-container'>
        <div className='date-picker-month'>
          <h1>{getMonth()}</h1>
        </div>
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