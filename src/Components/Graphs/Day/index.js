import React from 'react';
import { barChartDayData, lineChartDayData, areaChartDayData } from './helper';
import { LineGraph, BarGraph, AreaGraph } from '../dashboardGraphs';

const DayContainer = ({
  tasks,
  graphType
}) => {
  const lineData = lineChartDayData(tasks);
  const barData = barChartDayData(tasks);
  const areaData = areaChartDayData(tasks);

  return (
    <div className=''>
      {graphType === 'line' && <LineGraph data={lineData} xAxisDataKey='title' />}
      {graphType === 'bar' && <BarGraph data={barData} xAxisDataKey='title' />}
      {graphType === 'area' && <AreaGraph data={areaData} xAxisDataKey='title' />}
    </div>
  )
}

export default DayContainer;