import React from 'react';
import { sortWeek, formatData } from './helpers';
import { LineGraph } from './graphs';

const WeekContainer = ({
  tasks,
  graphType
}) => {
  const sortedData = sortWeek(tasks);

  const percentData = formatData(sortedData);

  return (
    <div className=''>
      {graphType === 'line' && <LineGraph data={percentData} />}
    </div>
  )
}

export default WeekContainer;