import React from 'react';
import { sortWeek, formatAreaData, formatLineData, formatBarData } from './helper';
import { LineGraph, BarGraph, AreaGraph } from '../dashboardGraphs';

const WeekContainer = ({
  tasks,
  graphType
}) => {
  const sortedData = sortWeek(tasks);

  const lineData = formatLineData(sortedData);
  const barData = formatBarData(sortedData);
  const areaData = formatAreaData(sortedData);

  return (
    <div className=''>
      {graphType === 'line' && <LineGraph data={lineData} xAxisDataKey='day' />}
      {graphType === 'bar' && <BarGraph data={barData} xAxisDataKey='day' />}
      {graphType === 'area' && <AreaGraph data={areaData} xAxisDataKey='day' />}
    </div>
  )
}

export default WeekContainer;