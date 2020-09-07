import React from 'react';

const Overlay = ({
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