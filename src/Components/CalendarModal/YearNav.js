import React from 'react';

const YearNav = ({
  year,
  toggleYearList
}) => {
  return (
    <div className='calendar-year-nav'>
      <span
        className='calendar-year-label'
        onClick={() => toggleYearList()}
      >
        {year}
      </span>
    </div>
  );
}

export default YearNav;