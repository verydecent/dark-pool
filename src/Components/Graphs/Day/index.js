import React from 'react';
import { barChartDayData, lineChartDayData, areaChartDayData } from '../../../Utilities/graphHelpers';
import { LineGraph, BarGraph, AreaGraph } from '../Day/graphs';

const DayContainer = ({
  tasks,
  graphType,
  selectGraphType
}) => {
  console.log(tasks)
  console.log(graphType)
  console.log(selectGraphType)

  const ButtonList = () => (
    <>
      <button onClick={() => selectGraphType('bar')}>Bar Chart</button>
      <button onClick={() => selectGraphType('line')}>Line Chart</button>
      <button onClick={() => selectGraphType('area')}>Area Chart</button>
    </>
  );

  const lineData = lineChartDayData(tasks);
  const barData = barChartDayData(tasks);
  const areaData = areaChartDayData(tasks);

  const LineChartConditional = graphType === 'line' ? <LineGraph data={lineData} /> : null;
  const BarChartConditional = graphType === 'bar' ? <BarGraph data={barData} /> : null;
  const AreaChartConditional = graphType === 'area' ? <AreaGraph data={areaData} /> : null;

  return (
    <div className=''>
      <ButtonList />
      {LineChartConditional}
      {BarChartConditional}
      {AreaChartConditional}
    </div>
  )
}

export default DayContainer;