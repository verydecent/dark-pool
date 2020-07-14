import React from 'react';
import './styles.css';

const CollectionModal = ({
  isModalOpen,
  toggleModal,
  title,
  todos,
}) => {
  return (
    <div className='collection-modal' style={{ display: isModalOpen ? 'block' : 'none' }}>
      <div className='collection-modal-overlay' onClick={toggleModal}></div>
      <div className='collection-modal-content'>
        <div className='collection-modal-content-header'>
           <h1 className='collection-modal-content-title'>
            Monday July 13 2020
          </h1>

          Icon goes here
        </div>
        <div className='collection-modal-content-body'>
          Body Here
        </div>
      </div>
    </div>
  );
}

export default CollectionModal;
