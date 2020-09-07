import React from 'react';
import './styles.css';
import { Times } from '../FAIcons';
import Subtask from '../Subtask';
import HalfPieChart from '../Graphs/HalfPieChart';
import Overlay from './Overlay';
import Header from './Header'
import Description from './Description';

const TaskModal = ({
  // values
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
  console.log('taskModal rerendering')
  return (
    <div className='task-modal'>
      <Overlay toggleModal={toggleModal} />


      <div className='task-modal-container'>

        {/* Header */}
        <Header
          taskTitle={taskTitle}
          toggleModal={toggleModal}
        />

        {/* Description Area */}
        <Description
          taskDescription={taskDescription}
          handleChange={handleChange}
          updateTask={updateTask}
        />
        {/* Graph/Details */}
        <div className='task-modal-details'>

        </div>
        {/* Subtask List */}
        <div className='task-modal-subtasks'>

        </div>






        <div className='task-modal-content-body'>

          {/* TOP */}
          <div className='task-modal-content-bottom-container'>
            <div className='task-modal-content-graph-container'>
              <HalfPieChart subtasks={subtasks} />
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