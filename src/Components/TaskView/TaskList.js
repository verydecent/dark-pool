import React from 'react';
import Task from '../Task';

const TaskList = ({
  // Values
  tasks,
  // Methods
  toggleModal,
  selectTask
}) => {

  const TasksMapped = tasks.map(task => {
    return (
      <Task
        // Values
        key={task._id}
        id={task._id}
        title={task.title}
        description={task.description}
        subtasks={task.subtasks}
        // Methods
        toggleModal={toggleModal}
        selectTask={selectTask}
      />
    );
  });
  return (
    <div className='task-view-tasks-list'>
      {TasksMapped}
    </div>
  );
}

export default TaskList;