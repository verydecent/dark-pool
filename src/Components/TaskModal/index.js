import React from 'react';
import './styles.css';
import { Times } from '../FAIcons';
import shortid from 'shortid';

const TaskModal = ({
  // values
  isModalOpen, 
  taskTitle,
  taskDescription,
  taskDateCreated,
  subtasks,
  subtaskDescription,

  // methods
  toggleModal,
  handleChange,
  addTask,
  updateTask,
  addSubtask,
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
              <form type='submit' onSubmit={(e) => addTask(e)}> 
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

                <button>Task it!</button>
                <button onClick={() => updateTask()}>Update task!</button>
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
                {subtasks.map(subtask => <h1 key={shortid.generate()}>{subtask.description}</h1>)}

                {/* subtask creator input here */}
                <form type='submit' onSubmit={(e) => addSubtask(e)}>
                  Subtask creator input
                  <input
                    className=''
                    name='subtaskDescription'
                    value={subtaskDescription}
                    onChange={(e) => handleChange(e)}
                  />
                  <button>Subtask it!</button>
                </form>
              </div>
            </div>
          </div>
         </div>
      </div>
    </div>
  );
}

export default TaskModal;
