import React from 'react';
import { sortYear, formData } from './helper';
import { LineGraph } from '../dashboardGraphs';

const YearContainer = ({
  tasks,
  graphType
}) => {
  const lineData = sortYear(tasks);

  const percentData = formData(lineData);

  return (
    <div className=''>
      {graphType === 'line' && <LineGraph data={percentData} />}
    </div>
  )
}

export default YearContainer;