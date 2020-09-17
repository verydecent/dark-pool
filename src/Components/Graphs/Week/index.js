import React from 'react';
import { sortDays, formatData } from './helpers';
import { LineGraph } from './graphs';

const WeekContainer = ({
  tasks,
  graphType
}) => {
  const sortedData = sortDays(tasks);

  const percentFormat = formatData(sortedData);
  console.log('percentFormat', percentFormat);
  // const LineChartConditional = graphType === 'line' && <LineGraph data={lineData} />;

  return (
    <div className=''>
      {/* {LineChartConditional} */}
    </div>
  )
}

export default WeekContainer;