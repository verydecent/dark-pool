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
  const ONEHUNDERDPERCENT = '100.0';

  return (
    <div
      className='task'
      onClick={() => {
        toggleModal();
        selectTask(id, title, description, subtasks);
      }}>
      {/* Title of Task */}
      <div
        className='task-cell title'
        style={{
          textDecoration: percent === ONEHUNDERDPERCENT ? 'line-through' : 'none'
        }}>
        {title}
      </div>
      {/* Complete out of total Subtasks */}
      <div className='task-cell'>
        {`${complete}/${total}`}
      </div>
      {/* Remaining Subtasks to complete */}
      <div className='task-cell'>
        {incomplete}
      </div>
      {/* Percent complete */}
      <div className='task-cell'>
        {percent}%
      </div>
    </div>
  );
}

export default Task;
