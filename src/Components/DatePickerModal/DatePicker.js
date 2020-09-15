import React from 'react';
import './styles.css';
import shortid from 'shortid';

const DatePicker = ({
  isDateTableVisible,
  isMonthTableVisible,
  isYearTableVisible,
  toggleMonthTable,
  getFirstDayOfMonth,
  getWeekdays,
  getAllMonths,
  getDaysInMonth,
  getToday,
  getMonth,
  setMonth,
  getYear,
  yearTable
}) => {

  const weekdaysHeader = getWeekdays().map(day => {
    return (
      <th key={shortid.generate()} className='date-picker-header-cells'>
        {day}
      </th>
    )
  });

  // Days not in month
  const blanksInMonth = [];
  for (let d = 0; d < getFirstDayOfMonth(); d++) {
    blanksInMonth.push(
      <td key={shortid.generate()} className='date-picker-body-cells blank'></td>
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
  const MonthList = () => {
    if (!isMonthTableVisible) {
      return null;
    }
    else {
      const months = getAllMonths().map(month => {
        return (
          <td
            key={shortid.generate()}
            onClick={() => setMonth(month)}
          >
            {month}
          </td >
        );
      });
      let rows = [];
      let cells = [];

      months.forEach((month, i) => {
        if (i % 3 !== 0 || i === 0) {
          cells.push(month);
        }
        else {
          rows.push(cells);
          cells = [];
          cells.push(month);
        }
      });
      rows.push(cells);

      const list = rows.map(month => <tr key={shortid.generate(month)}>{month}</tr>);

      return (
        <table>
          <thead>
            <tr>
              <th colSpan='4'>Select a Month</th>
            </tr>
          </thead>
          <tbody>{list}</tbody>
        </table>
      );
    }
  }

  // Year Table
  const YearTable = () => {
    const months = [];

  }

  return (
    <div className='date-picker'>
      <div className='date-picker-container'>
        <div className='date-picker-month'>
          <h1 onClick={() => toggleMonthTable()}>{getMonth()}</h1>
          <h1>{getYear()}</h1>
        </div>
        {isYearTableVisible && yearTable(getYear())}
        {isMonthTableVisible && MonthList()}
        {
          isDateTableVisible && (
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
          )
        }
      </div>
    </div>
  );
}

export default DatePicker;