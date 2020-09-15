import React from 'react';
import Day from '../Graphs/Day';

const GraphContainer = ({
  // Values
  tasks,
  graphTimeFrame,
  // Methods
}) => {
  return (
    <div className='dashboard-view-graph-container'>
      {graphTimeFrame === 'day' && <Day tasks={tasks} />}
      {graphTimeFrame === 'isoWeek' && <Day />}
      {graphTimeFrame === 'month' && <Day />}
      {graphTimeFrame === 'year' && <Day />}
    </div>
  )
}

export default GraphContainer;