import React from 'react';
import Day from '../Graphs/Day';
import Week from '../Graphs/Week';

const GraphContainer = ({
  // Values
  graphType,
  tasks,
  timeFrame,
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
      {timeFrame === 'isoWeek' && <Week tasks={tasks} graphType={graphType} />}
      {timeFrame === 'month' && <Day />}
      {timeFrame === 'year' && <Day />}
    </div>
  )
}

export default GraphContainer;