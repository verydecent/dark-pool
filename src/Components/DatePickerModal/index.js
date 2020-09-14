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
  getAllMonths,
  getDaysInMonth,
  getToday,
  getMonth,
  setMonth
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
            getAllMonths={getAllMonths}
            getDaysInMonth={getDaysInMonth}
            getToday={getToday}
            getMonth={getMonth}
            setMonth={setMonth}
          />
        </div>
      </div>
    );
  }
}

export default DatePickerModal;