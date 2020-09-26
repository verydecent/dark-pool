import React from 'react';

const SelectList = ({
  monthList
}) => {
  return monthList.map(data => {
    return (
      <div key={data}>
        <a href='#'>
          {data}
        </a>
      </div>
    );
  });
}

export default SelectList;