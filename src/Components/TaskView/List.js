import React from 'react';
import Task from '../Task';

const List = ({
  // Values
  tasks,
  // Methods
  toggleModal,
  selectTask
}) => {

  const TasksMapped = (tasks ? tasks : []).map(task => {
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

  console.log(TasksMapped)

  return (
    <div className='task-view-list'>
      {TasksMapped}
    </div>
  );
}

export default List;