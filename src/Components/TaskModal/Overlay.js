import React from 'react';

const Overlay = ({
  // Methods
  toggleModal
}) => {
  return (
    <div
      className='task-modal-overlay'
      onClick={() => toggleModal()}
    />
  );
}

export default Overlay;