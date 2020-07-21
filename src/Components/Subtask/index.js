import React from 'react';
import { Times  } from '../FAIcons';

const Subtask = ({
// Values
  id,
  description,
  complete,

  // Methods
  deleteSubtask,

}) => {
  console.log('id from subtask', id)
  return (
    <div>
      {/* Description */}
      {description}

      {/* Close button */}
      <div onClick={() => deleteSubtask(id)}>
        <Times />
      </div>

    </div>
  )
}

export default Subtask;
