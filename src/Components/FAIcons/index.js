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

export const TimesCircle = () => {
return (
  <div className='button-icon'>
    <FontAwesomeIcon icon='times-circle' color='rgba(255, 255, 255, 0.6)'/>
  </div>
  );
}

export const WindowClose = () => {
  return (
    <div className='button-icon'>
      <FontAwesomeIcon icon='window-close' color='rgba(255, 255, 255, 0.6)'/>
    </div>
  );
}

export const Plus = () => {
  return (
    <FontAwesomeIcon icon='plus' />
  );
}
