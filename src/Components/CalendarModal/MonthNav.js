import React from 'react';
import MonthList from './MonthList';

const MonthNav = ({
  isMonthListOpen,
  month,
  monthList,
  toggleMonthList,
  changeMonth
}) => {
  console.log(isMonthListOpen)
  return (
    <div className='calendar-month-nav'>
      <span
        className='calendar-month-label'
        onClick={toggleMonthList}
      >
        {month}
      </span>
      {isMonthListOpen && <MonthList monthList={monthList} changeMonth={changeMonth} />}
    </div>
  );
}

export default MonthNav;