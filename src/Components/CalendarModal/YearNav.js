import React from 'react';

const YearNav = ({
  year
}) => {
  return (
    <div className='calendar-year-nav'>
      <span className='calendar-year-label'>
        {year}
      </span>
    </div>
  );
}

export default YearNav;