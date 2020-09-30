import React from 'react';

const YearNav = ({
  year,
  isYearListOpen,
  toggleYearList,
  changeYear
}) => {
  return (
    <div className='calendar-year-nav'>
      {isYearListOpen
        ? <input
          className='calendar-year-editor'
          type='number'
          defaultValue={year}
          // onKeyUp={e => changeYear(e)}
          onChange={e => changeYear(e)}
        // onBlur={e => changeYear(e)}
        />
        : <span
          className='calendar-year-label'
          onClick={toggleYearList}
        >
          {year}
        </span>}
    </div>
  );
}

export default YearNav;