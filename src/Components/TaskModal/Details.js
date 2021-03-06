import React from 'react';
import Gauge from '../Graphs/Modal/Gauge';
import {
  getCompleteSubtaskAmount,
  getIncommpleteSubtaskAmount,
  getTotalSubtaskAmount
} from '../../Utilities/subtaskHelpers';

const Details = ({
  subtasks
}) => {

  const complete = getCompleteSubtaskAmount(subtasks);
  const remaining = getIncommpleteSubtaskAmount(subtasks);
  const total = getTotalSubtaskAmount(subtasks);

  return (
    <div className='task-modal-details'>
      {/* Graph */}
      <div className='task-modal-details-graph'>
        <Gauge subtasks={subtasks} />
      </div>
      {/* Details */}
      <ol>
        <li>
          Incomplete
          <span className='task-modal-details-group-data'>{remaining}</span>
        </li>
        <li>
          Complete
          <span className='task-modal-details-group-data'>{complete}</span>
        </li>
        <li>
          Total
          <span className='task-modal-details-group-data'>{total}</span>
        </li>
      </ol>
    </div>
  );
}

export default Details;