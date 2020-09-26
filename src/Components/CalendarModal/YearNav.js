import React from 'react';

const YearNav = ({
  year,
  isYearNavOpen,
  toggleYearList,


  yearInput,
  onKeyUpYear,
  showYearEditor,
  onChangeYear
}) => {
  return (
    <div className='calendar-year-nav'>
      {isYearNavOpen
        ? <input
          deffaultValue={year}
          className='calendar-year-editor'
          ref={(yearInput) => yearInput = yearInput}
          onKeyUp={() => onKeyUpYear()}
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