import React from 'react';
import { barChartDayData, lineChartDayData, areaChartDayData } from './helpers';
import { LineGraph, BarGraph, AreaGraph } from '../Day/graphs';

const WeekContainer = ({
  tasks,
  graphType
}) => {
  const lineData = lineChartDayData(tasks);
  const barData = barChartDayData(tasks);
  const areaData = areaChartDayData(tasks);

  const LineChartConditional = graphType === 'line' ? <LineGraph data={lineData} /> : null;
  const BarChartConditional = graphType === 'bar' ? <BarGraph data={barData} /> : null;
  const AreaChartConditional = graphType === 'area' ? <AreaGraph data={areaData} /> : null;

  return (
    <div className=''>
      {LineChartConditional}
      {BarChartConditional}
      {AreaChartConditional}
    </div>
  )
}

export default WeekContainer;