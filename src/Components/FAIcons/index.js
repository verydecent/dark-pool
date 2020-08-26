import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styles.css';

export const Times = () => {
  return (
    <div className='button-icon'>
      <FontAwesomeIcon icon='times' color='rgba(255, 255, 255, 0.6)' />
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

export const CalendarAlt = () => {
  return (
    <div className='button-icon'>
      <FontAwesomeIcon icon='calendar-alt' />
    </div>
  );
}

export const Clipboard = () => {
  return (
    <div className='button-icon'>
      <FontAwesomeIcon icon='clipboard' />
    </div>
  );
}

export const User = () => {
  return (
    <div className='button-icon'>
      <FontAwesomeIcon icon='user' />
    </div>
  );
}

export const ChartLine = () => {
  return (
    <div className='button-icon'>
      <FontAwesomeIcon icon='chart-line' />
    </div>
  );
}

export const SignOut = () => {
  return (
    <div className='button-icon'>
      <FontAwesomeIcon icon='sign-out-alt' />
    </div>
  );
}