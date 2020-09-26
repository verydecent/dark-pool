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
    <span
      className='label-month'
      onClick={(e) => toggleMonthList(e, month)}
    >
      {month}
      {isMonthNavOpen && <SelectList monthList={monthList} changeMonth={changeMonth} />}
    </span>
  );
}

export default MonthNav;