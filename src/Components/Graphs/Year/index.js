import React from 'react';
import { sortYear, formatLineData, formatBarData, formatAreaData } from './helper';
import { LineGraph, BarGraph, AreaGraph } from '../dashboardGraphs';

const YearContainer = ({
  tasks,
  graphType
}) => {
  const sortedData = sortYear(tasks);

  const lineData = formatLineData(sortedData);
  const barData = formatBarData(sortedData);
  const areaData = formatAreaData(sortedData);

  return (
    <div className=''>
      {graphType === 'line' && <LineGraph data={lineData} xAxisDataKey='month' />}
      {graphType === 'bar' && <BarGraph data={barData} xAxisDataKey='month' />}
      {graphType === 'area' && <AreaGraph data={areaData} xAxisDataKey='month' />}
    </div>
  )
}

export default YearContainer;