import React from 'react';
import { sortMonth, formatLineData, formatBarData, formatAreaData } from './helper';
import { LineGraph, AreaGraph, BarGraph } from '../dashboardGraphs';

const MonthContainer = ({
  tasks,
  graphType,
  dateContext
}) => {
  const sortedData = sortMonth(tasks, dateContext.daysInMonth());

  const lineData = formatLineData(sortedData);
  const barData = formatBarData(sortedData);
  const areaData = formatAreaData(sortedData);

  return (
    <div className=''>
      {graphType === 'line' && <LineGraph data={lineData} xAxisDataKey='date' />}
      {graphType === 'area' && <AreaGraph data={areaData} xAxisDataKey='date' />}
      {graphType === 'bar' && <BarGraph data={barData} xAxisDataKey='date' />}
    </div>
  )
}

export default MonthContainer;