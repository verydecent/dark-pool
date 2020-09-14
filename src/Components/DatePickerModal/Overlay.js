import React from 'react';

const Overlay = ({
  toggleModal
}) => {
  return (
    <div className='date-picker-modal-overlay'
      onClick={() => toggleModal()}
    />
  );
}

export default Overlay;