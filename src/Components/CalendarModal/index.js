import moment from 'moment';
import React from 'react';
import './styles.css';
import MonthNav from './MonthNav';
import YearNav from './YearNav';
import { AngleLeft, AngleRight } from '../FAIcons';
import { connect } from 'react-redux';
import {
  toggleMonthList,
  changeMonth,
  toggleYearList,
  changeYear,
  nextMonth,
  prevMonth,
  selectDate
} from '../../Redux/actionCreators';
import Overlay from './Overlay';
import { Times } from '../FAIcons';

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

  getCurrendivate = () => this.state.dateContext.get('date');

  getFirsdateOfMonth = () => {
    const { dateContext } = this.props;
    const firstDay = moment(dateContext).startOf('month').format('d');
    return firstDay;
  }

  render() {
    // Map weekdays i.e. Sun, Mon, Tue
    const weekdays = this.weekdaysShort.map(day => <div key={day} className='calendar-date'>{day}</div>);

    // Creates the empty dates from previous months
    const emptyDates = [];
    for (let i = 0; i < this.getFirsdateOfMonth(); i++) {
      emptyDates.push(<div key={i * 100} className='calendar-empty'>{''}</div>);
    }

    const daysInMonth = [];
    for (let d = 1; d <= this.props.dateContext.daysInMonth(); d++) {
      let today = d == moment().get('date') ? 'today' : '';
      const selected = d === this.props.dateContext.get('date') ? 'selected' : '';
      daysInMonth.push(
        <div
          className={`calendar-date ${selected} ${today}`}
          key={d}
          onClick={() => this.props.selectDate(d)}
        >
          {d}
        </div>);
    }

    // Combine empty dates and total days in month
    const totalDateSlots = [...emptyDates, ...daysInMonth];
    let rows = [];
    let cells = [];

    // Organize into mulidivimensional array modeling the month
    totalDateSlots.forEach((row, i) => {
      // If not 7th day (Sunday) then push to cells
      if ((i % 7) !== 0 || i === 0) {
        cells.push(row);
      }
      else {
        const inserdivow = cells.slice();
        rows.push(inserdivow);
        cells = [];
        cells.push(row);
      }
      if (i === totalDateSlots.length - 1) {
        const inserdivow = cells.slice();
        rows.push(inserdivow);
      }
    });

    const monthEl = rows.map((d, i) => <div className='calendar-row' key={i * 100}>{d}</div>);

    if (!this.props.isCalendarModalOpen) {
      return null;
    }
    else {
      return (
        <div className='calendar-modal' >
          <Overlay toggleCalendarModal={this.props.toggleCalendarModal} />
          <div className='calendar-container'>
            <div className='calendar'>
              <div className='calendar-header'>
                <div className='calendar-header-top'>
                  <YearNav
                    // Values
                    year={this.props.dateContext.format('Y')}
                    isYearListOpen={this.props.isYearListOpen}
                    // Methods
                    toggleYearList={this.props.toggleYearList}
                    changeYear={this.props.changeYear}
                  />
                  <div onClick={this.props.toggleAccountModal}>
                    <Times />
                  </div>
                </div>
                <div className='calendar-subheader'>
                  <MonthNav
                    // Values
                    isMonthListOpen={this.props.isMonthListOpen}
                    month={this.props.dateContext.format('MMMM')}
                    monthList={this.months}
                    // Methods
                    toggleMonthList={this.props.toggleMonthList}
                    changeMonth={this.props.changeMonth}
                  />
                  <div>
                    <button className='direction-button' onClick={this.props.prevMonth}>
                      <AngleLeft />
                    </button>
                    <button className='direction-button' onClick={this.props.nextMonth}>
                      <AngleRight />
                    </button>
                  </div>
                </div>
              </div>
              <div className='calendar-body'>
                <div className='calendar-row'>
                  {weekdays}
                </div>
                <div>
                  {monthEl}
                </div>
              </div>

            </div>
          </div>
        </div >
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    dateContext: state.dateContext,
    isCalendarModalOpen: state.isCalendarModalOpen,
    isMonthListOpen: state.isMonthListOpen,
    isYearListOpen: state.isYearListOpen
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleMonthList: () => dispatch(toggleMonthList()),
    changeMonth: month => dispatch(changeMonth(month)),
    toggleYearList: () => dispatch(toggleYearList()),
    changeYear: e => dispatch(changeYear(e)),
    nextMonth: () => dispatch(nextMonth()),
    prevMonth: () => dispatch(prevMonth()),
    selectDate: date => dispatch(selectDate(date))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CalendarModal); 