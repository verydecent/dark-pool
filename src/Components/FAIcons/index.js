import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styles.css';

export const Times = () => {
  return (
    <div className='button-icon'>
      <FontAwesomeIcon icon='times' color='rgba(255, 255, 255, 0.6)'/>
    </div>
  );
}

export const Plus = () => {
  return (
    <div className='button-icon'>
      <FontAwesomeIcon icon='plus' />
    </div>
  );
}

export const AngleLeft = () => {
  return (
    <div className='button-icon'>
      <FontAwesomeIcon icon='angle-left' />
    </div>
  );
}

export const AngleRight = () => {
  return (
    <div className='button-icon'>
      <FontAwesomeIcon icon='angle-right' />
    </div>
  );
}
