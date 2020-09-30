import React from 'react';

const YearNav = ({
  year,
  isYearListOpen,
  toggleYearList,
  onKeyUpYear,
  onBlurYear,
  onChangeYear
}) => {
  return (
    <div className='calendar-year-nav'>
      {isYearListOpen
        ? <input
          className='calendar-year-editor'
          type='number'
          defaultValue={year}
          onKeyUp={e => onKeyUpYear(e)}
          onChange={e => onChangeYear(e)}
          onBlur={e => onBlurYear(e)}
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