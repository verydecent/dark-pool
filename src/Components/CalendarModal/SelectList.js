import React from 'react';

const SelectList = ({
  monthList,
  changeMonth
}) => {
  return monthList.map(data => {
    return (
      <div key={data}>
        <a href='#' onClick={(e) => changeMonth(e, data)}>
          {data}
        </a>
      </div>
    );
  });
}

export default SelectList;