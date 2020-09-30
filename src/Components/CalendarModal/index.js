import moment from 'moment';
import React from 'react';
import './styles.css';
import MonthNav from './MonthNav';
import YearNav from './YearNav';
import { AngleLeft, AngleRight } from '../FAIcons';
import { toggleCalendarModal } from '../../Redux/Actions';
import { connect } from 'react-redux';

class CalendarModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dateContext: moment(),
      isMonthNavOpen: false,
      isYearNavOpen: false,
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
  toggleMonthList = () => {
    this.setState({
      isMonthNavOpen: !this.state.isMonthNavOpen
    });
  }
  changeMonth = newMonth => {
    const monthNumber = this.months.indexOf(newMonth);
    let newDateContext = Object.assign({}, this.state.dateContext);
    newDateContext = moment(newDateContext).set('month', monthNumber);
    this.setState({ dateContext: newDateContext }, () => this.toggleMonthList());
  }
  toggleYearList = () => {
    this.setState({
      isYearNavOpen: !this.state.isYearNavOpen
    });
  }
  setYear = year => {
    let newDateContext = Object.assign({}, this.state.dateContext);
    newDateContext = moment(newDateContext).set('year', year);
    this.setState({ dateContext: newDateContext });
  }
  onChangeYear = e => {
    const year = e.target.value;
    this.setYear(year);
  }
  onKeyUpYear = e => {
    if (e.which === 13 || e.which === 27) {
      const year = e.target.value;
      this.setYear(year);
      this.toggleYearList();
    }
  }
  onBlurYear = e => {
    const year = e.target.value;
    this.setYear(year);
    this.toggleYearList();
  }

  prevMonth = () => {
    let dateContext = Object.assign({}, this.state.dateContext);
    dateContext = moment(dateContext).subtract(1, 'month');
    this.setState({ dateContext });
  }

  nextMonth = () => {
    let dateContext = Object.assign({}, this.state.dateContext);
    dateContext = moment(dateContext).add(1, 'month');
    this.setState({ dateContext });
  }

  onClickDay = day => {
    let dateContext = Object.assign({}, this.state.dateContext);
    dateContext = moment(this.state.dateContext).set('date', day);
    this.setState({ dateContext: dateContext }, console.log(this.state.dateContext));
  }

  render() {
    // Map weekdays i.e. Sun, Mon, Tue
    const weekdays = this.weekdaysShort.map(day => <td key={day} className='weekday'>{day}</td>);

    // Creates the empty dates from previous months
    const emptyDates = [];
    for (let i = 0; i < this.getFirstDayOfMonth(); i++) {
      emptyDates.push(<td key={i * 100} className='calendar-empty-dates'></td>);
    }

    const daysInMonth = [];
    for (let d = 1; d <= this.getDaysInMonth(); d++) {
      const className = d == this.getCurrentDay() ? 'date current-date' : 'date';
      const selectedDateClassName = d === this.state.dateContext.get('date') ? 'selected' : '';
      daysInMonth.push(
        <td key={d} className={className + ' ' + selectedDateClassName}>
          <span onClick={() => this.onClickDay(d)}>{d}</span>
        </td>);
    }

    // Combine empty dates and total days in month
    const totalDateSlots = [...emptyDates, ...daysInMonth];
    let rows = [];
    let cells = [];

    // Organize into mulitdimensional array modeling the month
    totalDateSlots.forEach((row, i) => {
      // If not 7th day (Sunday) then push to cells
      if ((i % 7) !== 0 || i === 0) {
        cells.push(row);
      }
      else {
        const insertRow = cells.slice();
        rows.push(insertRow);
        cells = [];
        cells.push(row);
      }
      if (i === totalDateSlots.length - 1) {
        const insertRow = cells.slice();
        rows.push(insertRow);
      }
    });

    const monthEl = rows.map((d, i) => <tr key={i * 100}>{d}</tr>);

    return (
      <div className='calendar-modal' >
        <div className='calendar-modal-overlay' />
        <table className='calendar'>
          <thead>
            <tr className='calendar-header'>
              <td colSpan='5'>
                <MonthNav
                  // Values
                  isMonthNavOpen={this.state.isMonthNavOpen}
                  month={this.getMonth()}
                  monthList={this.months}
                  // Methods
                  toggleMonthList={this.toggleMonthList}
                  changeMonth={this.changeMonth}
                />
                <YearNav
                  // Values
                  year={this.getYear()}
                  isYearNavOpen={this.state.isYearNavOpen}
                  // Methods
                  toggleYearList={this.toggleYearList}
                  onChangeYear={this.onChangeYear}
                  onKeyUpYear={this.onKeyUpYear}
                  onBlurYear={this.onBlurYear}
                />
              </td>
              <td colSpan='2'>
                <button onClick={this.prevMonth}>
                  <AngleLeft />
                </button>
                <button onClick={this.nextMonth}>
                  <AngleRight />
                </button>
              </td>
            </tr>
            <tr>
            </tr>
          </thead>
          <tbody>
            <tr>
              {weekdays}
            </tr>
            {monthEl}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isCalendarModalOpen: state.isCalendarModalOpen
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleCalendarModal: () => dispatch(toggleCalendarModal())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CalendarModal); 