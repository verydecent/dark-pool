import React from 'react';
import './styles.css';
import { Times } from '../FAIcons/index';
import { getTotalSubtaskAmount, getCompleteSubtaskAmount, getIncommpleteSubtaskAmount, getCompleteSubtaskPercent } from '../../Utilities/subtaskHelpers';

const Task = ({
  // Values
  id,
  title,
  description,
  subtasks,
  // Methods
  toggleModal,
  selectTask
}) => {

  const total = getTotalSubtaskAmount(subtasks);
  const incomplete = getIncommpleteSubtaskAmount(subtasks);
  const complete = getCompleteSubtaskAmount(subtasks);
  const percent = getCompleteSubtaskPercent(complete, total);
  console.log('percent', percent);

  return (
    <div
      className='task'
      onClick={() => {
        toggleModal();
        selectTask(id, title, description, subtasks);
      }}>
      <div className='task-cell'>
        {title}
      </div>
      <div className='task-cell'>
        {total}
      </div>
      <div className='task-cell'>
        {`${complete} / ${total}`}
      </div>
      <div className='task-cell'>
        {percent} %
      </div>
    </div>
  );
}

export default Task;
