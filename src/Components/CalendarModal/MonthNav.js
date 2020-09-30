import React from 'react';
import MonthList from './MonthList';

const MonthNav = ({
  isMonthNavOpen,
  month,
  monthList,
  toggleMonthList,
  changeMonth
}) => {
  return (
    <div className='calendar-month-nav'>
      <span
        className='calendar-month-label'
        onClick={toggleMonthList}
      >
        {month}
      </span>
      {isMonthNavOpen && <MonthList monthList={monthList} changeMonth={changeMonth} />}
    </div>
  );
}

export default MonthNav;