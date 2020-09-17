import React from 'react';
import { barGraphData } from './helpers';
import { LineGraph } from './graphs';

const WeekContainer = ({
  tasks,
  graphType
}) => {
  console.log(barGraphData(tasks));

  const LineChartConditional = graphType === 'line' && <LineGraph data={lineData} />;

  return (
    <div className=''>
      {LineChartConditional}
    </div>
  )
}

export default WeekContainer;