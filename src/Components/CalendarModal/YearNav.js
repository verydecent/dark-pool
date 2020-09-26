import React from 'react';

const YearNav = ({
  year,
  isYearNavOpen,
  toggleYearList,


  // yearInput,
  onKeyUpYear,
  showYearEditor,
  onChangeYear
}) => {
  return (
    <div className='calendar-year-nav'>
      {isYearNavOpen
        ? <input
          className='calendar-year-editor'
          type='number'
          defaultValue={year}
          // ref={(yearInput) => yearInput = yearInput}
          onKeyUp={(e) => onKeyUpYear(e)}
          onChange={(e) => onChangeYear(e)}
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