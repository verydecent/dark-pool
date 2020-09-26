import React from 'react';

const YearNav = ({
  year,
  isYearNavOpen,
  toggleYearList,
  onKeyUpYear,
  onBlurYear,
  onChangeYear
}) => {
  return (
    <div className='calendar-year-nav'>
      {isYearNavOpen
        ? <input
          className='calendar-year-editor'
          type='number'
          defaultValue={year}
          onKeyUp={e => onKeyUpYear(e)}
          onChange={e => onChangeYear(e)}
          onBlur={e => onBlueYear(e)}
        />
        : <span
          className='calendar-year-label'
          onClick={() => toggleYearList()}
        >
          {year}
        </span>}
    </div>
  );
}

export default YearNav;