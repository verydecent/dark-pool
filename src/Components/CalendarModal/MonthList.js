import React from 'react';

const MonthList = ({
  monthList,
  changeMonth
}) => {
  return monthList.map(data => {
    return (
      <div key={data}>
        <span className='month-list-item' onClick={() => changeMonth(data)}>
          {data}
        </span>
      </div>
    );
  });
}

export default MonthList;