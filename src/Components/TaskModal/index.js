import React from 'react';
import './styles.css';
import { Times } from '../FAIcons';
import Subtask from '../Subtask';
import HalfPieChart from '../Graphs/HalfPieChart';
import Overlay from './Overlay';
import Header from './Header'
import Description from './Description';
import Details from './Details';
import SubtaskList from './SubtaskList';

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
      <Overlay
        // Methods
        toggleModal={toggleModal}
      />
      <div className='task-modal-container'>
        <Header
          // Values
          taskTitle={taskTitle}
          // Methods
          handleChange={handleChange}
          toggleModal={toggleModal}
        />
        <Description
          // Values
          taskDescription={taskDescription}
          // Methods
          handleChange={handleChange}
          updateTask={updateTask}
        />
        <Details
        // Values
        // Methods
        />
        <SubtaskList
          // Values
          taskId={taskId}
          subtasks={subtasks}
          addSubtask={addSubtask}
          // Methods
          handleChangeSubtask={handleChangeSubtask}
          toggleSubtask={toggleSubtask}
          updateSubtask={updateSubtask}
          deleteSubtask={deleteSubtask}
          // deleteTask method button inside of SubtaskList Component
          deleteTask={deleteTask}
        />
      </div>
    </div >
  );
}

export default TaskModal;