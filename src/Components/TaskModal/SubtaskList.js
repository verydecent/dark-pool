import React from 'react';
import Subtask from '../Subtask';

const SubtaskList = ({
  // Values
  taskId,
  subtasks,
  // Methods
  addSubtask,
  handleChangeSubtask,
  updateSubtask,
  toggleSubtask,
  deleteSubtask
}) => {

  const subtasksMapped = subtasks.map(subtask => {
    return (
      <Subtask
        key={subtask._id}
        subtaskId={subtask._id}
        description={subtask.description}
        complete={subtask.complete}
        taskId={taskId}
        handleChangeSubtask={handleChangeSubtask}
        updateSubtask={updateSubtask}
        toggleSubtask={toggleSubtask}
        deleteSubtask={deleteSubtask}
      />
    );
  })

  return (
    <div className='task-modal-subtask-list'>
      Subtask list
      <button
        className='task-modal-button'
        onClick={(e) => addSubtask(e, taskId)}
      >
        Create Subtask
      </button>
      {/* Subtasks */}
      {subtasksMapped}
    </div>
  );
}

export default SubtaskList;