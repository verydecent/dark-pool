import React from 'react';
import './styles.css';
import Overlay from './Overlay';
import { isDate } from 'moment';

const DatePickerModal = ({
  // Values
  isDatePickerModalOpen,
  // Methods
  toggleModal
}) => {
  if (!isDatePickerModalOpen) {
    return null;
  }
  else {
    return (
      <div className='date-picker-modal'>
        <Overlay toggleModal={toggleModal} />
        <div className='date-picker-modal-container'>
          Container
        </div>
      </div>
    );
  }
}

export default DatePickerModal;