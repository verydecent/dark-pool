import React from 'react';
import SelectList from './SelectList';

const MonthNav = ({
  isMonthNavOpen,
  month,
  monthList
}) => {
  if (!isMonthNavOpen) {
    return null;
  }
  else {
    return (
      <span className='label-month'>
        {month}
        <SelectList monthList={monthList} />
      </span>
    );
  }
}

export default MonthNav;