import moment from 'moment';
import React from 'react';
import './styles.css';

class CalendarModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      momentContext: moment(),
      today: moment(),
      isMonthTableOpen: false,
      isYearTableOpen: false,
    }

    // View helpers
    this.weekdays = moment.weekdays(); // ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    this.weekdaysShort = moment.weekdaysShort(); // ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className=''>
        Something
      </div>
    );
  }
}

export default CalendarModal;