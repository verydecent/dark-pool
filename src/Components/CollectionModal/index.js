import React from 'react';
import './styles.css';
import { Times } from '../FAIcons';

const CollectionModal = ({
  isModalOpen,
  toggleModal,
  title,
  todos,
}) => {

  console.log(Times)
  return (
    <div className='collection-modal' style={{ display: isModalOpen ? 'block' : 'none' }}>
      <div className='collection-modal-overlay' onClick={toggleModal}></div>
      <div className='collection-modal-content'>
        <div className='collection-modal-content-header'>
           <h1 className='collection-modal-content-title'>
            Monday July 13 2020
          </h1>
          <div className='collection-modal-icon'>
            <Times />
          </div>
        </div>
        <div className='collection-modal-content-body'>
          Body Here
        </div>
      </div>
    </div>
  );
}

export default CollectionModal;
