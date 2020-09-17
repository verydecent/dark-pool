import React from 'react';
import withNav from '../Hoc/withNav';
import './styles.css';
import { isAuthenticated } from '../../Utilities/helpers';
import Day from '../Graphs/Day';
import DatePickerModal from '../DatePickerModal';
import moment from 'moment';
import shortid from 'shortid';
import axios from '../../Utilities/axiosConfig';
import GraphContainer from './GraphContainer';

/*
Graph options

Showing percentage complete
Y axis: 0 - 100%
X axis: different depending on time view

Showing amounts of subtasks
- Total
- Complete
- Incomplete

Helpers

Userflow

Opening dashboard will open up current day and percent complete of each task
Line chart will show how much complete, incomplete, total subtasks there are per task

level 1 buttons => {
  Views
  Day
  Week
  Month
  Year
}

level 2 buttons => {
  Percent Complete (Bar Chart)
  Amount of tasks (Line Chart showing three lines 1. Total 2. Complete 3. Incomplete)
  Amount of subtasks (Line Chart showing three lines 1. Total 2. Complete 3. Incomplete)
}


State = {
  view: (can be day, view, week, month) default - day
  graphType: (can be percentBarChart, tasksLineChart, subtaskLineChart) default - overall percent complete
}


How to choose time frame?

Day
  * selected day
  beginningOfCurrentDay - endOfCurrentDay

Week
  * selected day, group week
  beginningOfMonday(relativeToCurrentDay) - endOfSunday(relativeToCurrentDay)

Month
  * month that selected day is in
  beginningOfTheFirstDayOfMonth(relativeToCurrentDay) - endOfTheLastDayOfTheMonth(relativeToCurrentDay)

Year
  * selected year
  beginningOfJanuraryFirst(SelectedYear) - endOfDecemberThirtyFirst(selectedYear)


Have dashboard control view selection while graph class components are responsible for making the proper get request

Would be expensive to make request for YTD data
Just make specific requests.... ? But i feel like its liekly they will click on YTD anyway so.... hmmmm


GET request button view onClick?
Or..
GET request ALL data on componentDidMount then use helper to filter depending on View and state options
*/

class DashboardView extends React.Component {
  constructor() {
    super();
    this.state = {
      userId: isAuthenticated()._id,

      // View
      isModalVisible: false,
      isDateTableVisible: true,
      isYearTableVisible: false,
      isMonthTableVisible: false,
      // Graph
      timeFrame: 'day',
      graphType: 'bar',
      // Tasks for Graph
      tasks: [],

      // Date Picker
      dateObject: moment(),
      selectedDay: '',
      beginning: '',
      end: ''
    };

    // HTTP Request handlers
    this.getTasks = this.getTasks.bind(this);

    // Graph methods
    this.selectTimeFrame = this.selectTimeFrame.bind(this);
    this.selectGraphType = this.selectGraphType.bind(this);

    // View methods
    this.toggleModal = this.toggleModal.bind(this);
    this.toggleMonthTable = this.toggleMonthTable.bind(this);
    this.toggleYearTable = this.toggleYearTable.bind(this);


    // Date Picker methods
    this.getFirstDayOfMonth = this.getFirstDayOfMonth.bind(this);
    this.getWeekdays = this.getWeekdays.bind(this);
    this.getAllMonths = this.getAllMonths.bind(this);
    this.getDaysInMonth = this.getDaysInMonth.bind(this);
    this.getToday = this.getToday.bind(this);
    this.getMonth = this.getMonth.bind(this);
    this.setMonth = this.setMonth.bind(this);
    this.getYear = this.getYear.bind(this);
    this.getDates = this.getDates.bind(this);
    this.yearTable = this.yearTable.bind(this);
    this.setYear = this.setYear.bind(this);
    this.onPrev = this.onPrev.bind(this);
    this.onNext = this.onNext.bind(this);
    this.onDayClick = this.onDayClick.bind(this);
  }

  componentDidMount() {
    const { userId } = this.state;
    let beginning = moment().startOf('day').toDate();
    let end = moment().endOf('day').toDate();

    axios.get(`/task/${userId}?start_date=${beginning}&end_date=${end}`)
      .then(response => {
        this.setState({
          ...this.state,
          tasks: response.data
        });
      })
      .catch(error => {
        console.log('error', error);
      });
  }

  getTasks() {
    // Time frame can be day, week, month, or year
    const { userId, beginning, end } = this.state;
    // Make 4 backend endpoints based on timeframe
    axios.get(`/task/${userId}?start_date=${beginning}&end_date=${end}`)
      .then(response => {
        console.log()
        // Then setState
        this.setState({
          ...this.state,
          tasks: response.data
        });
      })
      .catch(error => {
        console.log('error', error);
      });
  }

  selectGraphType(type) {
    this.setState({
      ...this.state,
      graphType: type
    });
  }

  selectTimeFrame(timeFrame) {
    let beginning;
    let end;
    let date = Object.assign({}, this.state.dateObject);

    date = moment(date);
    beginning = date.startOf(timeFrame).toDate();
    end = date.endOf(timeFrame).toDate();

    this.setState(prevState => {
      return {
        ...prevState,
        timeFrame: timeFrame,
        beginning: beginning,
        end: end,
      }
    }, () => this.getTasks());
  }

  toggleModal() {
    this.setState({
      ...this.state,
      isModalVisible: !this.state.isModalVisible
    });
  }

  toggleMonthTable() {
    this.setState({
      // ...this.state,
      isMonthTableVisible: !this.state.isMonthTableVisible,
      isDateTableVisible: !this.state.isDateTableVisible
    });
  }

  toggleYearTable() {
    this.setState({
      ...this.state,
      isYearTableVisible: !this.state.isYearTableVisible,
      isDateTableVisible: !this.state.isDateTableVisible
    });
  }

  // Date Picker methods
  getFirstDayOfMonth() {
    const { dateObject } = this.state;
    const firstDayOfMonth = moment(dateObject).startOf('month').format('d');

    return firstDayOfMonth;
  }

  getWeekdays() {
    const weekdays = moment.weekdaysShort();

    return weekdays;
  }

  getAllMonths() {
    const months = moment.months();

    return months;
  }

  getDaysInMonth() {
    const { dateObject } = this.state;
    const daysInMonth = dateObject.daysInMonth();

    return daysInMonth;
  }

  getToday() {
    const { dateObject } = this.state;
    const today = dateObject.format('D');

    return today;
  }

  getMonth() {
    return this.state.dateObject.format('MMMM');
  }

  getYear() {
    return this.state.dateObject.format('Y');
  }

  getNextTenYears() {
    return moment().set('year',)
  }

  setMonth(month) {
    const monthNumber = this.getAllMonths().indexOf(month);
    let dateObject = Object.assign({}, this.state.dateObject);
    dateObject = moment(dateObject).set('month', monthNumber);

    this.setState({
      ...this.state,
      dateObject: dateObject,
      isMonthTableVisible: !this.state.isMonthTableVisible,
      isDateTableVisible: !this.state.isDateTableVisible
    });
  }

  getDates(startDate, endDate) {
    const dateArray = [];
    let currentDate = moment(startDate);
    const stopDate = moment(endDate);
    while (currentDate <= stopDate) {
      dateArray.push(moment(currentDate).format('YYYY'));
      currentDate = moment(currentDate).add(1, 'year');
    }

    return dateArray;
  }

  // Produces JSX for year table

  yearTable(year) {
    const nextTen = moment().set('year', year).add(12, 'year').format('Y');

    const twelveYears = this.getDates(year, nextTen);

    const months = twelveYears.map(year => {
      return (
        <td
          key={shortid.generate()}
          className=''
          onClick={e => {
            this.setYear(year)
          }}
        >
          {year}
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

    const YearList = rows.map((d, i) => <tr key={shortid.generate()}>{d}</tr>);

    return (
      <table>
        <thead>
          <tr>
            <th colSpan='4'>Select a Year</th>
          </tr>
        </thead>
        <tbody>{YearList}</tbody>
      </table>
    );
  }

  setYear(year) {
    let dateObject = Object.assign({}, this.state.dateObject);
    dateObject = moment(dateObject).set('year', year);
    this.setState({
      isYearTableVisible: !this.state.isYearTableVisible,
      isMonthTableVisible: !this.state.isMonthTableVisible,
      dateObject: dateObject
    });
  }

  onPrev() {
    let curr = '';
    if (this.state.isMonthTableVisible) {
      curr = 'month';
    }
    else {
      curr = 'year';
    }
    this.setState({
      dateObject: this.state.dateObject.subtract(1, curr)
    });
  }

  onNext() {
    let curr = '';
    if (this.state.isMonthTableVisible) {
      curr = 'month';
    }
    else {
      curr = 'year';
    }
    this.setState({
      dateObject: this.state.dateObject.add(1, curr)
    });
  }

  onDayClick(e, d) {
    this.setState({
      ...this.state,
      selectedDay: d
    }, () => console.log('Selected day', d));
  }

  render() {
    const ButtonList = () => (
      <div>
        <button onClick={() => this.selectTimeFrame('day')}>Day View</button>
        <button onClick={() => this.selectTimeFrame('isoWeek')}>Week View</button>
        <button onClick={() => this.selectTimeFrame('month')}>Month View</button>
        <button onClick={() => this.selectTimeFrame('year')}>Year View</button>
        <button onClick={() => this.toggleModal()}>Date Picker</button>
      </div>
    );

    return (
      <div className='dashboard-view'>
        <DatePickerModal
          isModalVisible={this.state.isModalVisible}
          isDateTableVisible={this.state.isDateTableVisible}
          isMonthTableVisible={this.state.isMonthTableVisible}
          isYearTableVisible={this.state.isYearTableVisible}
          toggleModal={this.toggleModal}
          toggleMonthTable={this.toggleMonthTable}
          toggleYearTable={this.toggleYearTable}
          getFirstDayOfMonth={this.getFirstDayOfMonth}
          getWeekdays={this.getWeekdays}
          getAllMonths={this.getAllMonths}
          getDaysInMonth={this.getDaysInMonth}
          getToday={this.getToday}
          getMonth={this.getMonth}
          getYear={this.getYear}
          setMonth={this.setMonth}
          onPrev={this.onPrev}
          onNext={this.onNext}
          onDayClick={this.onDayClick}
          // Prouces JSX
          yearTable={this.yearTable}
        />
        <div className='dashboard-view-container'>
          <ButtonList />
          <GraphContainer
            timeFrame={this.state.timeFrame}
            tasks={this.state.tasks}
            graphType={this.state.graphType}
            selectGraphType={this.selectGraphType}
          />
        </div>
      </div>
    );
  }
}

export default withNav(DashboardView);