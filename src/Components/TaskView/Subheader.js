import React from 'react';
import Button from '../Button';

const Subheader = ({
  createTask
}) => {
  return (
    <div className='task-view-subheader'>
      <Button onClick={createTask}>
        Create Task
      </Button>
    </div>
  );
}

export default Subheader;