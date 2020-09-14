import React from 'react';
import withNav from '../Hoc/withNav';
import './styles.css';
import { isAuthenticated } from '../../Utilities/helpers';
import {
  AreaChart,
  Area,
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid
} from 'recharts';
import Day from '../Graphs/Day';
import DatePickerModal from '../DatePickerModal';
import moment from 'moment';


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
  chartType: (can be percentBarChart, tasksLineChart, subtaskLineChart) default - overall percent complete
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
      isDatePickerModalOpen: true,
      // Graph
      chartTimeFrame: 'day',

      // Date Picker
      dateObject: moment()
    };

    // View methods
    this.toggleModal = this.toggleModal.bind(this);

    // Graph methods
    this.selectView = this.selectView.bind(this);

    // Date Picker methods
    this.getFirstDayOfMonth = this.getFirstDayOfMonth.bind(this);
    this.getWeekdays = this.getWeekdays.bind(this);
    this.getAllMonths = this.getAllMonths.bind(this);
    this.getDaysInMonth = this.getDaysInMonth.bind(this);
    this.getToday = this.getToday.bind(this);
    this.getMonth = this.getMonth.bind(this);
  }

  selectView(timeFrame) {
    console.log('timeFrame', timeFrame);
    this.setState(prevState => {
      return {
        ...prevState,
        chartTimeFrame: timeFrame
      }
    });
  }

  toggleModal() {
    this.setState({ ...this.state, isDatePickerModalOpen: !this.state.isDatePickerModalOpen });
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
    const { dateObject } = this.state;
    const month = dateObject.format('MMMM');

    return month;
  }


  render() {
    const ButtonList = () => (
      <>
        <button onClick={() => this.selectView('day')}>Day View</button>
        <button onClick={() => this.selectView('week')}>Week View</button>
        <button onClick={() => this.selectView('month')}>Month View</button>
        <button onClick={() => this.selectView('year')}>Year View</button>
        <button onClick={() => this.toggleModal()}>Date Picker</button>
      </>
    );

    const DayConditonal = this.state.chartTimeFrame === 'day' ? <Day /> : null;

    return (
      <div className='dashboard-view'>
        <DatePickerModal
          isDatePickerModalOpen={this.state.isDatePickerModalOpen}
          toggleModal={this.toggleModal}
          getFirstDayOfMonth={this.getFirstDayOfMonth}
          getWeekdays={this.getWeekdays}
          getAllMonths={this.getAllMonths}
          getDaysInMonth={this.getDaysInMonth}
          getToday={this.getToday}
          getMonth={this.getMonth}
        />
        <ButtonList />
        {/* {DayConditonal} */}
      </div>
    );
  }
}

export default withNav(DashboardView);
