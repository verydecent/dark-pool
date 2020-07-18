import React from 'react';
import './styles.css';
import { Times } from '../FAIcons';

const TaskModal = ({
  // values
  isModalOpen, 
  taskTitle,
  taskDescription,
  taskDateCreated,
  subtasks,
  subtaskTitle,

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
              <form type='submit'> 
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
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                </div>
                <div className='task-modal-content-details-row'>
                  <div className='task-modal-content-details-row-left'>
                    <label className='task-modal-content-details-label'>
                      Description
                    </label>
                  </div>
                  <div className='task-modal-content-details-row-right'>
                    <input
                      name='taskDescription'
                      value={taskDescription}
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                 </div>
              </form>
            </div>




            <div className='task-modal-content-graph-container'>
              Graph goes here
            </div>
          </div>

          <div className='task-modal-content-bottom-container'>
            <div className='task-modal-content-input-container'>
              <div className='task-modal-content-details-subtask-container'>
                {/* map out sub tasks here */}

                {/* subtask creator input here */}

                Subtask creator input
                <input
                  className=''
                  name='subtaskTitle'
                  value={subtaskTitle}
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </div>
          </div>
         </div>
      </div>
    </div>
  );
}

export default TaskModal;
