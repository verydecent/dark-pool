import React from 'react';
import './styles.css';
import Overlay from './Overlay';
import DatePicker from './DatePicker';

const DatePickerModal = ({
  // Values
  isDatePickerModalOpen,
  // Methods
  toggleModal,
  getFirstDayOfMonth,
  getWeekdays,
  getDaysInMonth,
  getToday
}) => {
  if (!isDatePickerModalOpen) {
    return null;
  }
  else {
    return (
      <div className='date-picker-modal'>
        <Overlay toggleModal={toggleModal} />
        <div className='date-picker-modal-container'>
          <DatePicker
            getFirstDayOfMonth={getFirstDayOfMonth}
            getWeekdays={getWeekdays}
            getDaysInMonth={getDaysInMonth}
            getToday={getToday}
          />
        </div>
      </div>
    );
  }
}

export default DatePickerModal;