import React from 'react';
import Day from '../Graphs/Day';

const GraphContainer = ({
  // Values
  graphType,
  tasks,
  timeFrame,
  // Methods
  selectGraphType
}) => {
  return (
    <div className='dashboard-view-graph-container'>
      {timeFrame === 'day' && <Day selectGraphType={selectGraphType} tasks={tasks} graphType={graphType} />}
      {timeFrame === 'isoWeek' && <Day />}
      {timeFrame === 'month' && <Day />}
      {timeFrame === 'year' && <Day />}
    </div>
  )
}

export default GraphContainer;