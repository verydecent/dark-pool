import React from 'react';
import './styles.css';
import { Times } from '../FAIcons';

const TaskModal = ({
  // values
  isModalOpen, 
  taskTitle,
  taskDescription,
  taskDateCreated,
  tasks,

  // methods
  toggleModal,
  handleChange
}) => {

  return (
    <div className='task-modal' style={{ display: isModalOpen ? 'block' : 'none' }}>
      <div className='task-modal-overlay' onClick={() => toggleModal()}></div>
      <div className='task-modal-content'>
        <div className='task-modal-content-header'>
           <h1 className='task-modal-content-title'>
             Task Name
          </h1>
          <div onClick={() => toggleModal()}>
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
                  {taskDateCreated}
                </div>
              </div>
              <div className='task-modal-content-details-row'>
                <div className='task-modal-content-details-row-left'>
                  <label className='task-modal-content-details-label'>
                    Title
                  </label>
                </div>
                <div className='task-modal-content-details-row-right'>
                  <input
                    name='taskTitle'
                    value={taskTitle}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className='task-modal-content-details-row'>
                <div className='task-modal-content-details-row-left'>
                  <label className='task-modal-content-details-label'>
                    Title
                  </label>
                </div>
                <div className='task-modal-content-details-row-right'>
                  <input
                    name='taskDescription'
                    value={taskDescription}
                    onChange={handleChange}
                  />
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
