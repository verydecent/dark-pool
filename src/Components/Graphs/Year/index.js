import React from 'react';
import { sortYear } from './helpers';
import { LineGraph } from '../Day/graphs';

const YearContainer = ({
  tasks,
  graphType
}) => {
  const lineData = sortYear(tasks);

  // const percentData = formData(lineData);

  return (
    <div className=''>
      {graphType === 'line' && <LineGraph /* data={percentData} */ />}
    </div>
  )
}

export default YearContainer;