import React from 'react';
import DayLineChart from './DayLineChart';
import DayBarChart from './DayBarChart';
import DayAreaChart from './DayAreaChart';
import { barChartDayData, lineChartDayData, areaChartDayData } from '../../../Utilities/graphHelpers';

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

  const LineChartConditional = graphType === 'line' ? <DayLineChart data={lineData} /> : null;
  const BarChartConditional = graphType === 'bar' ? <DayBarChart data={barData} /> : null;
  const AreaChartConditional = graphType === 'area' ? <DayAreaChart data={areaData} /> : null;

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