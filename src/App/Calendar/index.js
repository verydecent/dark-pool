import React from 'react';
import moment from 'moment';

export default class Calendar extends React.Component {
  constructor() {
    super();
    this.state = {
      dateObject: moment(),
      allMonths: moment.months(),
			showMonthTable: false,
    }
    this.weekdayshort = moment.weekdaysShort();

    // class methods
    this.firstDayOfMonth = this.firstDayOfMonth.bind(this);
    this.daysInMonth = this.daysInMonth.bind(this);
    this.currentDay = this.currentDay.bind(this);
    this.currentMonth = this.currentMonth.bind(this);
    this.createMonthList = this.createMonthList.bind(this);
    this.setMonth = this.setMonth.bind(this);
		this.showMonth = this.showMonth.bind(this);
  }

	componentDidMount() {
		console.log('=== CDM ===');
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
  
  currentDay() {
    const { dateObject } = this.state;
    return dateObject.format('D');
  }

  currentMonth() {
    return this.state.dateObject.format('MMMM');
  }
  
  createMonthList(props) {
    let months = [];
    props.data.map(data => {
      months.push(
        <td
          key={data}
          onClick={e => this.setMonth(data)}
        >
          <span>{data}</span>
        </td>
      );
    });
    
    let rows = [];
    let cells = [];

    months.forEach((row, i) => {
      if (i % 3 !== 0 || i == 0) {
        cells.push(row);
      }
      else {
        rows.push(cells);
        cells = [];
        cells.push(row);
      }
    });
    rows.push(cells);

    let monthlist = rows.map((d, i) => {
      return <tr key={i}>{d}</tr>;
    });

    return (
      <table>
        <thead>
          <tr>
            <th colSpan='4'>Select a Month</th>
          </tr>
        </thead>
        <tbody>{monthlist}</tbody>
      </table>
    );
  }
  
  setMonth(month) {
    let monthNo = this.state.allMonths.indexOf(month);
    
    let dateObject = Object.assign({}, this.state.dateObject);
      
    dateObject = moment(dateObject).set("month", monthNo);
    this.setState({
      dateObject: dateObject
    }); 
  }

	showMonth() {
		this.setState(prevState => ({ showMonthTable: !prevState.showMonthTable }));
	}
 
  render() {
    let weekdayshortname = this.weekdayshort.map(day => <th key={day} className='week-day'>{day}</th>);
    let blanks = [];
    for (let i = 0; i < this.firstDayOfMonth(); i++) {
      blanks.push(
        <td className='calendar-day empty'></td>
      );
    }
    
    let daysInMonth = [];
    for (let d = 1; d <= this.daysInMonth(); d++) {
      const currentDate = this.currentDay() == d ? { color: 'red' } : {};
      daysInMonth.push(
        <td key={d} style={currentDate} className='calendar-day'>{d}</td>
      );
    }

    var totalSlots = [...blanks, ...daysInMonth];
    let rows = [];
    let cells = [];

    totalSlots.forEach((row, i) => {
      if (i % 7 !== 0) {
        cells.push(row);
      }
      else {
        rows.push(cells); 
        cells = [];
        cells.push(row);
      }
      if (i === totalSlots.length - 1) {
        rows.push(cells);
        cells = [];
      }
    });
    
    let daysinmonth = rows.map((d, i) => {
      return <tr key={i}>{d}</tr>;
    });
    
    return (
      <div>
        
        <div>
          <h2>
						Calendar 
					</h2>
					<h2
						onClick={() => this.showMonth()}
						style={{ fontWeight: 'bold', fontSize: 20 }}
					>
						{this.currentMonth()}
					</h2>
					<div>
						{this.state.showMonthTable && <this.createMonthList data={this.state.allMonths} />}
					</div>
					{!this.state.showMonthTable && 
          <table>
            <thead>
              <tr>{weekdayshortname}</tr>
            </thead>
            <tbody>{daysinmonth}</tbody>
          </table>
					}
        </div>
      </div>
    );
  }
}
