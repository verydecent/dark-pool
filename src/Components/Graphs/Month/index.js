import React from 'react';
import { sortMonth, formatData } from './helpers';
import { LineGraph } from './graphs';

const MonthContainer = ({
  tasks,
  graphType,
  dateObject
}) => {
  const sortedData = sortMonth(tasks, dateObject.daysInMonth());

  const percentData = formatData(sortedData);

  return (
    <div className=''>
      {graphType === 'line' && <LineGraph data={percentData} />}
    </div>
  )
}

export default MonthContainer;