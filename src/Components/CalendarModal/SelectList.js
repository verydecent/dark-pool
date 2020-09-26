import React from 'react';

const SelectList = ({
  monthList,
  changeMonth
}) => {
  return monthList.map(data => {
    return (
      <div key={data}>
        <a href='#' onClick={() => changeMonth(data)}>
          {data}
        </a>
      </div>
    );
  });
}

export default SelectList;