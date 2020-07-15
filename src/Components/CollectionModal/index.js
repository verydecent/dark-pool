import React from 'react';
import './styles.css';
import { Times, WindowClose, TimesCircle } from '../FAIcons';

const CollectionModal = ({
  isModalOpen,
  toggleModal,
  title,
  todos,
}) => {

  console.log(Times)
  return (
    <div className='collection-modal' style={{ display: isModalOpen ? 'block' : 'none' }}>
      <div className='collection-modal-overlay' onClick={() => toggleModal()}></div>
      <div className='collection-modal-content'>
        <div className='collection-modal-content-header'>
           <h1 className='collection-modal-content-title'>
            Monday July 13 2020
          </h1>
          <div className='collection-modal-icon' onClick={() => toggleModal()}>
            <Times />
          </div>
        </div>
        <div className='collection-modal-content-body'>
          <div className='collection-modal-content-top-container'>
            <div className='collection-modal-content-graph-container'>
              Graph goes here
            </div>
            <div className='collection-modal-content-details-container'>
              Details go here
              <div className='collection-modal-content-details-input'>
                <input />
                Date Created
                Last Edited
                Description

              </div>
            </div>
          </div>

          <div className='collection-modal-content-bottom-container'>
            <div className='collection-modal-content-input-container'>
              <input
                className='collection-modal-content-input'
                placeholder='Write something you have to do!'
              />
            </div>
          </div>
         </div>
      </div>
    </div>
  );
}

export default CollectionModal;
