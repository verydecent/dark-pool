import React from 'react';
import './styles.css';
import { Times } from '../FAIcons';

const TaskModal = ({
  isModalOpen,
  toggleModal,
  title,
  todos,
}) => {

  return (
    <div className='task-modal' style={{ display: isModalOpen ? 'block' : 'none' }}>
      <div className='task-modal-overlay' onClick={() => toggleModal()}></div>
      <div className='task-modal-content'>
        <div className='task-modal-content-header'>
           <h1 className='task-modal-content-title'>
             Task Name
          </h1>
          <div className='task-modal-icon' onClick={() => toggleModal()}>
            <Times />
          </div>
        </div>
        <div className='task-modal-content-body'>
          <div className='task-modal-content-top-container'>
            <div className='task-modal-content-details-container'>
              <div className='task-modal-content-details-input'>
              </div>
              
              <div className='task-modal-content-details-row'>
                <div className='task-modal-content-details-row-left'>
                  <label className='task-modal-content-details-label'>
                    Published
                  </label>
                </div>
                <div className='task-modal-content-details-row-right'>
                  Monday July 14 2020
                </div>
              </div>
              <div className='task-modal-content-details-row'>
                <div className='task-modal-content-details-row-left'>
                  <label className='task-modal-content-details-label'>
                    Description
                  </label>
                </div>
                <div className='task-modal-content-details-row-right'>
                  Create Task Modal. Ensure the redux and fetch calls make sense wihe db.
                </div>
              </div>
            </div>
            <div className='task-modal-content-graph-container'>
              Graph goes here
            </div>
          </div>

          <div className='task-modal-content-bottom-container'>
            <div className='task-modal-content-input-container'>

            </div>
          </div>
         </div>
      </div>
    </div>
  );
}

export default TaskModal;
