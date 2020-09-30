import React from 'react';
import { toggleMonthList } from '../../Redux/actionCreators';

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
          onChange={e => changeYear(e)}
          onKeyUp={e => {
            if (e.key === 'Enter' || e.key === 'Esc' || e.key === 'Escape') {
              toggleYearList()
            }
          }}
          onBlur={toggleYearList}
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