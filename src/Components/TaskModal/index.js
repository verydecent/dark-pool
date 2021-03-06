import React from 'react';
import './styles.css';
import Overlay from './Overlay';
import Header from './Header'
import Description from './Description';
import Details from './Details';
import SubtaskList from './SubtaskList';
import ButtonContainer from './ButtonContainer';

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
  if (!isModalOpen) {
    return null;
  }
  else {
    return (
      <div className='task-modal'>
        <Overlay
          // Methods
          toggleModal={toggleModal}
        />
        <div className='task-modal-container'>
          <Header
            // Values
            taskId={taskId}
            taskTitle={taskTitle}
            // Methods
            updateTask={updateTask}
            handleChange={handleChange}
            toggleModal={toggleModal}
          />
          <Details
            // Values
            subtasks={subtasks}
          // Methods
          />
          <div className='task-modal-overflow-container'>
            <Description
              // Values
              taskId={taskId}
              taskDescription={taskDescription}
              // Methods
              handleChange={handleChange}
              updateTask={updateTask}
            />
            <SubtaskList
              // Values
              taskId={taskId}
              subtasks={subtasks}
              // Methods
              handleChangeSubtask={handleChangeSubtask}
              toggleSubtask={toggleSubtask}
              updateSubtask={updateSubtask}
              deleteSubtask={deleteSubtask}
            />
          </div>
          <ButtonContainer
            // Values
            taskId={taskId}
            // Methods
            addSubtask={addSubtask}
            deleteTask={deleteTask}
          />
        </div>
      </div>
    );
  }
}

export default TaskModal;