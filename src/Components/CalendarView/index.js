import React from 'react';
import moment from 'moment';
import withNav from '../Hoc/withNav';
import './styles.css';

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
    console.log(this.state.date);
    return (
      <div className='calendar-view'>
        <button onClick={this.changeDate}>Click it</button>
      </div>
    )
  }
}

export default withNav(CalendarView);
