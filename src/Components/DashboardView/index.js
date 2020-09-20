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
import { TaskGauge, SubtaskGauge } from '../Graphs/dashboardGraphs';
import {
  getSubtaskTotalFromTasks,
  getSubtaskCompletedFromTasks,
  getSubtaskIncompleteFromTasks,
  getTaskTotal,
  getTaskCompleted,
  getTaskIncomplete
} from '../../Utilities/subtaskHelpers';
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
      graphType: 'line',
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

  selectGraphType(e) {
    const { value } = e.target;

    this.setState({
      ...this.state,
      graphType: value
    });
  }

  selectTimeFrame(e) {
    const { value } = e.target;
    let beginning;
    let end;
    let date = Object.assign({}, this.state.dateObject);

    date = moment(date);
    beginning = date.startOf(value).toDate();
    end = date.endOf(value).toDate();

    this.setState(prevState => {
      return {
        ...prevState,
        timeFrame: value,
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
    const TimeFrameButtons = () => (
      <select className='dropdown-button' value={this.state.timeFrame} onChange={(e) => this.selectTimeFrame(e)}>
        <option value='day'>Day View</option>
        <option value='isoWeek'>Week View</option>
        <option value='month'>Month View</option>
        <option value='year'>Year View</option>
      </select>
    );

    const GraphTypeButtons = () => (
      <select className='dropdown-button' value={this.state.graphType} onChange={(e) => this.selectGraphType(e)}>
        <option value='line'>Line Graph</option>
        <option value='bar'>Bar Graph</option>
        <option value='area'>Area View</option>
      </select>
    );

    const currentTimeFrame = timeFrame => {
      if (timeFrame === 'day') return this.state.dateObject.format('dddd LL');
      else if (timeFrame === 'isoWeek') return `Week of ${this.state.dateObject.format('LL')}`;
      else if (timeFrame === 'month') return this.state.dateObject.format('MMMM YYYY');
      else if (timeFrame === 'year') return this.state.dateObject.format('YYYY');
    }

    const timeFrametitle = () => {
      if (this.state.timeFrame === 'day') {
        return 'Daily'
      }
      else if (this.state.timeFrame === 'isoWeek') {
        return 'Weekly'
      }
      else if (this.state.timeFrame === 'month') {
        return 'Monthly'
      }
      else if (this.state.timeFrame === 'year') {
        return 'Yearly'
      }
    }

    const graphTypeTitle = () => {
      if (this.state.graphType === 'line') {
        return 'Line Graph'
      }
      else if (this.state.graphType === 'area') {
        return 'Area Graph'
      }
      else if (this.state.graphType === 'bar') {
        return 'Bar Graph'
      }
    }

    return (
      <>
        <div className='data-view'>
          <div className='data-view-header-left'>
            <div className='data-view-header-top'>
              <h1 className='header-1'>
                Dashboard
              </h1>
            </div>
            <div className='data-view-header-bottom'>
              <div className='data-view-box-container'>
                <div className='data-view-box'>
                  <span className='data-view-title'>
                    Incomplete
                  </span>
                  <span className='data-view-number tasks'>
                    {getTaskIncomplete(this.state.tasks)} <span className='data-view-mini'>tasks</span>
                  </span>
                  <span className='data-view-number subtasks'>
                    {getSubtaskIncompleteFromTasks(this.state.tasks)} <span className='data-view-mini'>subtasks</span>
                  </span>
                </div>
                <div className='data-view-box'>
                  <span className='data-view-title'>
                    Completed
                  </span>
                  <span className='data-view-number tasks'>
                    {getTaskCompleted(this.state.tasks)} <span className='data-view-mini'>tasks</span>
                  </span>
                  <span className='data-view-number subtasks'>
                    {getSubtaskCompletedFromTasks(this.state.tasks)} <span className='data-view-mini'>subtasks</span>
                  </span>
                </div>
                <div className='data-view-box'>
                  <span className='data-view-title'>
                    Total
                  </span>
                  <span className='data-view-number tasks'>
                    {getTaskTotal(this.state.tasks)} <span className='data-view-mini'>tasks</span>
                  </span>
                  <span className='data-view-number subtasks'>
                    {getSubtaskTotalFromTasks(this.state.tasks)} <span className='data-view-mini'>subtasks</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className='data-view-header-right'>
            <div className='data-view-header-top'>
              <h1 className='header-1'>
                Task Progress
              </h1>
            </div>
            <div className='data-view-header-bottom'>
              <div className='data-view-gauge-container'>
                <TaskGauge tasks={this.state.tasks} />
              </div>
            </div>
          </div>
          <div className='data-view-header-right'>
            <div className='data-view-header-top'>
              <h1 className='header-1'>
                Subtask Progress
              </h1>
            </div>
            <div className='data-view-header-bottom'>
              <div className='data-view-gauge-container'>
                <SubtaskGauge tasks={this.state.tasks} />
              </div>
            </div>
          </div>
        </div>
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
            <div className='dashboard-view-header'>
              <div className='dashboard-view-header-title'>
                <h1 className='header-1'>
                  {`${timeFrametitle()} ${graphTypeTitle()} `}
                </h1>
              </div>
              <div className='dashboard-view-button-list'>
                <div className='data-view-title'>
                  {currentTimeFrame(this.state.timeFrame)}
                </div>
                <div>
                  <TimeFrameButtons />
                  <GraphTypeButtons />
                </div>
              </div>
            </div>
            <GraphContainer
              dateObject={this.state.dateObject}
              tasks={this.state.tasks}
              timeFrame={this.state.timeFrame}
              graphType={this.state.graphType}
            />
          </div>
        </div>
      </>
    );
  }
}

export default withNav(DashboardView);