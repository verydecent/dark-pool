import React from 'react';

// Need to build helper file for getting

const Details = ({

}) => {
  return (
    <div className='task-modal-details'>
      <label>Details</label>
      {/* Details */}
      <ol>
        <li>
          <div className='task-modal-details-group'>
            <span className='task-modal-details-group-field'>Subtasks Remaining:</span>
            <span className='task-modal-details-group-data'>25</span>
          </div>
        </li>
        <li>
          <div className='task-modal-details-group'>
            <span className='task-modal-details-group-field'>Subtasks Complete:</span>
            <span className='task-modal-details-group-data'>75</span>
          </div>
        </li>
        <li>
          <div className='task-modal-details-group'>
            <span className='task-modal-details-group-field'>Subtasks Total:</span>
            <span className='task-modal-details-group-data'>100</span>
          </div>
        </li>
      </ol>
      {/* Graph */}
      <div className='task-modal-details-graph'>

      </div>
    </div>
  );
}

export default Details;