import React from 'react';
import './styles.css';

const DateView = ({
  date
}) => {
  return (
    <div className='date-view'>
      {date}
    </div>
  );
}

export default DateView;