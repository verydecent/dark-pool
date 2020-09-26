import React from 'react';
import moment from 'moment';
import './styles.css';
import withNav from '../Hoc/withNav';

class CalendarView extends React.Component {
  constructor() {
    super();
    this.state = {
      date: moment(),
    }

    this.changeDate = this.changeDate.bind(this);
  }

  componentDidMount() {
    console.log('date in cdm', this.state.date);
  }

  changeDate() {
    this.state.date.add(1, 'year');
  }

  render() {
    return (
      <div className='calendar-view'>
        <button onClick={this.changeDate}>Click it</button>
      </div>
    );
  }
}

export default withNav(CalendarView);