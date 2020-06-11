import React from 'react';
import moment from 'moment';

export default class Calendar extends React.Component {
  constructor() {
    super();
    this.state = {
      dateObject: moment()
    }
    this.weekdayshort = moment.weekdaysShort();

    // class methods
    this.firstDayOfMonth = this.firstDayOfMonth.bind(this);
    this.daysInMonth = this.daysInMonth.bind(this);
  }
  
  firstDayOfMonth() {
    let dateObject = this.state.dateObject;
    let firstDay = moment(dateObject).startOf('month').format('d');
    
    return firstDay;
  }

  daysInMonth() {
    const { dateObject } = this.state;
    const daysInMonth = dateObject.daysInMonth();
    
    return daysInMonth;
  }
 
  render() {
    
    let weekdayshortname = this.weekdayshort.map(day => <th key={day}>{day}</th>);
    let blanks = [];
    for (let i = 0; i < this.firstDayOfMonth(); i++) {
      blanks.push(
        <td className=''></td>
      );
    }
    console.log('blanks', blanks);
    
    let daysInMonth = [];
    for (let d = 1; d <= this.daysInMonth(); d++) {
      daysInMonth.push(
        <td key={d} className=''>{d}</td>
      );
    }
    console.log('daysInMonth', daysInMonth);
    

    return (
      <div>
        <h2>Calendar</h2>
        <table>
          <thead>
            <tr>{weekdayshortname}</tr>
          </thead>
        </table>
      </div>
    );
  }
}
