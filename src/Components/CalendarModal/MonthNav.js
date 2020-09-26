import React from 'react';
import SelectList from './SelectList';

const MonthNav = ({
  month,
  monthList
}) => {
  return (
    <span className='label-month'>
      {month}
      <SelectList monthList={monthList} />
    </span>
  );
}

export default MonthNav;