import React from 'react';
import './styles.css';
import { Times } from '../FAIcons';
import shortid from 'shortid';
import Subtask from '../Subtask';
import axios from 'axios';

class TaskModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    const {
      // values
      taskId,
      isModalOpen,
      taskTitle,
      taskDescription,
      taskDateCreated,
      subtasks,
      subtaskDescription,

      // methods
      toggleModal,
      handleChange,
      updateTask,
      deleteTask,
      addSubtask,
      deleteSubtask,
      updateSubtask,
      toggleSubtask
    } = this.props;
    const subtasksConditional = subtasks ? subtasks : [];
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

                  {/* <SubtaskList
                    taskId={taskId}
                  /> */}
                  {/* map out sub tasks here */}
                  {subtasksConditional.map(subtask => {
                    return (
                      <Subtask
                        key={shortid.generate()}
                        id={subtask._id}
                        description={subtask.description}
                        complete={subtask.complete}
                        deleteSubtask={deleteSubtask}
                        updateSubtask={updateSubtask}
                        toggleSubtask={toggleSubtask}
                      />
                    );
                  })}

                  {/* subtask creator input here */}
                  <form type='submit' onSubmit={(e) => addSubtask(e)}>
                    Subtask creator input
                    {/* <input
                      className=''
                      name='subtaskDescription'
                      value={subtaskDescription}
                      onChange={(e) => handleChange(e)}
                    /> */}
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
}

export default TaskModal;
