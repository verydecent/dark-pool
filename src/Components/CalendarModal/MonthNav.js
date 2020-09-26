import React from 'react';
import SelectList from './SelectList';

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
        className='label-month'
        onClick={() => toggleMonthList(month)}
      >
        {month}
      </span>
      {isMonthNavOpen && <SelectList monthList={monthList} changeMonth={changeMonth} />}
    </div>
  );
}

export default MonthNav;