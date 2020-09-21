import React from 'react';

const ListHeader = () => {
  return (
    <div className='task-view-field-header-wrapper'>
      <div className='task-view-field-header'>
        <div className='task-view-field'>Task Title</div>
        <div className='task-view-field'>Subtask Total</div>
        <div className='task-view-field'>Remaining Subtasks</div>
        <div className='task-view-field'>Percent Complete</div>
      </div>
    </div>
  );
}

export default ListHeader;