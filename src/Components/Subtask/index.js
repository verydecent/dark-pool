import React from 'react';
import { Times  } from '../FAIcons';

const Subtask = ({
// Values
  description,
  // Methods
}) => {

  return (
    <div>
      {/* Description */}
      {description}

      {/* Close button */}
      <div>
        <Times />
      </div>

    </div>
  )
}

export default Subtask;
