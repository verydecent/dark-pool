import React from 'react';
import './styles.css';
import { Times, WindowClose, TimesCircle } from '../FAIcons';

const TaskModal = ({
  isModalOpen,
  toggleModal,
  title,
  todos,
}) => {

  console.log(Times)
  return (
    <div className='task-modal' style={{ display: isModalOpen ? 'block' : 'none' }}>
      <div className='task-modal-overlay' onClick={() => toggleModal()}></div>
      <div className='task-modal-content'>
        <div className='task-modal-content-header'>
           <h1 className='task-modal-content-title'>
            Monday July 13 2020
          </h1>
          <div className='task-modal-icon' onClick={() => toggleModal()}>
            <Times />
          </div>
        </div>
        <div className='task-modal-content-body'>
          <div className='task-modal-content-top-container'>
            <div className='task-modal-content-details-container'>
              Details go here
              <div className='task-modal-content-details-input'>
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
