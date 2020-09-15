import React from 'react';
import Day from '../Graphs/Day';

const GraphContainer = ({
  graphTimeFrame
}) => {
  return (
    <div className='dashboard-view-graph-container'>
      {graphTimeFrame === 'day' && <Day />}
      {graphTimeFrame === 'isoWeek' && <Day />}
      {graphTimeFrame === 'month' && <Day />}
      {graphTimeFrame === 'year' && <Day />}
    </div>
  )
}

export default GraphContainer;