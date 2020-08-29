import React from 'react';
import './styles.css';
import { Times } from '../FAIcons';
import Subtask from '../Subtask';

const TaskModal = ({
  // values
  isModalOpen,
  taskId,
  taskTitle,
  taskDescription,
  taskDateCreated,
  subtasks,

  // methods
  toggleModal,
  handleChange,
  updateTask,
  deleteTask,
  addSubtask,
  handleChangeSubtask,
  toggleSubtask,
  updateSubtask,
  deleteSubtask,
}) => {
  return (
    <div className='task-modal' style={{ display: isModalOpen ? 'block' : 'none' }}>
      <div className='task-modal-overlay' onClick={() => toggleModal()}></div>
      <div className='task-modal-content'>
        <div className='task-modal-content-header'>
          <h1 className='task-modal-content-title'>
            {taskTitle}
          </h1>
          <div onClick={() => toggleModal()}>
            <Times />
          </div>
        </div>
        <div className='task-modal-content-body'>

          {/* TOP */}
          <div className='task-modal-content-bottom-container'>
            <div className='task-modal-content-graph-container'>
              Graph goes here
              </div>
            <div className='task-modal-content-details-container'>
              <form type='submit' onSubmit={(e) => updateTask(e)}>
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
                <button>Update Task Changes</button>
              </form>
              <button onClick={() => deleteTask()}>Delete Task</button>
            </div>
          </div>

          {/* BOTTOM */}

          <div className='task-modal-content-top-container'>
            <div className='task-modal-content-input-container'>
              <div className='task-modal-content-details-subtask-container'>
                {/* map out sub tasks here */}
                {subtasks.map(subtask => {
                  return (
                    <Subtask
                      // Using subtask's _id as key otherwise React will re render a new form every setState
                      // This causes the input lose focus
                      key={subtask._id}
                      subtaskId={subtask._id}
                      taskId={taskId}
                      description={subtask.description}
                      complete={subtask.complete}
                      handleChangeSubtask={handleChangeSubtask}
                      updateSubtask={updateSubtask}
                      toggleSubtask={toggleSubtask}
                      deleteSubtask={deleteSubtask}
                    />
                  );
                })}

                {/* subtask creator input here */}
                <form type='submit' onSubmit={(e) => addSubtask(e, taskId)}>
                  Subtask creator input
                    <button>Add Subtask</button>
                </form>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div >
  );
}

export default TaskModal;