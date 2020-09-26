import React from 'react';
import SelectList from './SelectList';

const MonthNav = ({
  isMonthNavOpen,
  month,
  monthList
}) => {
  return (
    <span className='label-month'>
      {month}
      {isMonthNavOpen && <SelectList monthList={monthList} />}
    </span>
  );
}

export default MonthNav;