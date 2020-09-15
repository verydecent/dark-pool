import React from 'react';
import './styles.css';
import Overlay from './Overlay';
import DatePicker from './DatePicker';

const DatePickerModal = ({
  // Values
  isModalVisible,
  isDateTableVisible,
  isMonthTableVisible,
  isYearTableVisible,
  // Methods
  toggleModal,
  toggleMonthTable,
  toggleYearTable,
  getFirstDayOfMonth,
  getWeekdays,
  getAllMonths,
  getDaysInMonth,
  getToday,
  getMonth,
  setMonth,
  getYear,
  yearTable,
  onPrev,
  onNext
}) => {
  if (!isModalVisible) {
    return null;
  }
  else {
    return (
      <div className='date-picker-modal'>
        <Overlay toggleModal={toggleModal} />
        <div className='date-picker-modal-container'>
          <DatePicker
            isDateTableVisible={isDateTableVisible}
            isMonthTableVisible={isMonthTableVisible}
            isYearTableVisible={isYearTableVisible}
            toggleMonthTable={toggleMonthTable}
            toggleYearTable={toggleYearTable}
            getFirstDayOfMonth={getFirstDayOfMonth}
            getWeekdays={getWeekdays}
            getAllMonths={getAllMonths}
            getDaysInMonth={getDaysInMonth}
            getToday={getToday}
            getMonth={getMonth}
            setMonth={setMonth}
            getYear={getYear}
            yearTable={yearTable}
            onPrev={onPrev}
            onNext={onNext}
          />
        </div>
      </div>
    );
  }
}

export default DatePickerModal;