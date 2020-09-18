import React from 'react';
import Day from '../Graphs/Day';
import Week from '../Graphs/Week';
import Month from '../Graphs/Month';
import Year from '../Graphs/Year';

const GraphContainer = ({
  graphType,
  tasks,
  timeFrame,
  dateObject,
}) => {
  if (tasks.length === 0) {
    return 'Not enough data, please make some task entries';
  }
  else {
    return (
      <div className='dashboard-view-graph-container'>
        {timeFrame === 'day' && <Day tasks={tasks} graphType={graphType} />}
        {timeFrame === 'isoWeek' && <Week dateObject={dateObject} tasks={tasks} graphType={graphType} />}
        {timeFrame === 'month' && <Month dateObject={dateObject} tasks={tasks} graphType={graphType} />}
        {timeFrame === 'year' && <Year dateObject={dateObject} tasks={tasks} graphType={graphType} />}
      </div>
    )
  }
}

export default GraphContainer;