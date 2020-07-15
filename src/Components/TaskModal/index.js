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
            <div className='collection-modal-content-details-container'>
              Details go here
              <div className='collection-modal-content-details-input'>
              </div>
              
              <div className='task-modal-content-details-row'>
                <div className='task-modal-content-details-row-left'>
                  Date Published
                </div>
                <div className='task-modal-content-details-row-right'>
                  Monday July 14 2020
                </div>
              </div>
              <div className='task-modal-content-details-row'>
                <div className='task-modal-content-details-row-left'>
                  Task Details
                </div>
                <div className='task-modal-content-details-row-right'>
                  Create Task Modal. Ensure the redux and fetch calls make sense wihe db.
                </div>
              </div>
            </div>
            <div className='collection-modal-content-graph-container'>
              Graph goes here
            </div>
          </div>

          <div className='collection-modal-content-bottom-container'>
            <div className='collection-modal-content-input-container'>

            </div>
          </div>
         </div>
      </div>
    </div>
  );
}

export default CollectionModal;
