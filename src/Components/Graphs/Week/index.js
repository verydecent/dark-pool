import React from 'react';
import { sortWeek, formatData } from './helper';
import { LineGraph } from '../dashboardGraphs';

const WeekContainer = ({
  tasks,
  graphType
}) => {
  const sortedData = sortWeek(tasks);

  const percentData = formatData(sortedData);

  return (
    <div className=''>
      {graphType === 'line' && <LineGraph data={percentData} xAxisDataKey='day' />}
    </div>
  )
}

export default WeekContainer;