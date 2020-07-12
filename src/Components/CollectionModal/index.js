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
        Collection Modal Component
      </div>
    </div>
  );
}

export default CollectionModal;
