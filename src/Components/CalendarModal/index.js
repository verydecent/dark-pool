import moment from 'moment';
import React from 'react';
import './styles.css';

class CalendarModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dateContext: moment(),
      today: moment(),
      isMonthTableOpen: false,
      isYearTableOpen: false,
    }

    // View helpers
    this.weekdays = moment.weekdays(); // ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    this.weekdaysShort = moment.weekdaysShort(); // ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    this.months = moment.months();
  }

  getYear = () => this.state.dateContext.format('Y');
  getMonth = () => this.state.dateContext.format('MMMM');
  getDaysInMonth = () => this.state.dateContext.daysInMonth();
  getCurrentDate = () => this.state.dateContext.get('date');
  getCurrentDay = () => this.state.dateContext.format('D');
  getFirstDayOfMonth = () => {
    const { dateContext } = this.state;
    const firstDay = moment(dateContext).startOf('month').format('d');
    return firstDay;
  }

  render() {
    return (
      <div className=''>
        {this.getMonth()}
      </div>
    );
  }
}

export default CalendarModal;