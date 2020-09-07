import React from 'react';
import Gauge from '../Graphs/Gauge';
// Need to build helper file for getting

const Details = ({
  subtasks
}) => {
  return (
    <div className='task-modal-details'>
      {/* Details */}
      <ol>
        <li>
          Subtasks Remaining:
          <span className='task-modal-details-group-data'>25</span>
        </li>
        <li>
          Subtasks Complete:
          <span className='task-modal-details-group-data'>75</span>
        </li>
        <li>
          Subtasks Total:
          <span className='task-modal-details-group-data'>100</span>
        </li>
      </ol>
      {/* Graph */}
      <div className='task-modal-details-graph'>
        <Gauge subtasks={subtasks} />
      </div>
    </div>
  );
}

export default Details;