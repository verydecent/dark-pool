import React from 'react';
import Day from '../Graphs/Day';
import Week from '../Graphs/Week';
import Month from '../Graphs/Month';
import Year from '../Graphs/Year';

const GraphContainer = ({
  // Values
  graphType,
  tasks,
  timeFrame,
  dateObject,
  // Methods
  selectGraphType
}) => {

  const GraphTypeButtons = () => (
    <>
      <button onClick={() => selectGraphType('bar')}>Bar Chart</button>
      <button onClick={() => selectGraphType('line')}>Line Chart</button>
      <button onClick={() => selectGraphType('area')}>Area Chart</button>
    </>
  );

  return (
    <div className='dashboard-view-graph-container'>

      <GraphTypeButtons />
      {timeFrame === 'day' && <Day tasks={tasks} graphType={graphType} />}
      {timeFrame === 'isoWeek' && <Week dateObject={dateObject} tasks={tasks} graphType={graphType} />}
      {timeFrame === 'month' && <Month dateObject={dateObject} tasks={tasks} graphType={graphType} />}
      {timeFrame === 'year' && <Year dateObject={dateObject} tasks={tasks} graphType={graphType} />}
    </div>
  )
}

export default GraphContainer;