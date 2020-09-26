import React from 'react';
import SelectList from './SelectList';

const MonthNav = ({
  isMonthNavOpen,
  month,
  monthList,
  onChangeMonth
}) => {
  return (
    <span
      className='label-month'
      onClick={(e) => onChangeMonth(e, month)}
    >
      {month}
      {isMonthNavOpen && <SelectList monthList={monthList} />}
    </span>
  );
}

export default MonthNav;