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
      chartTimeFrame: '',
    };

    this.selectView = this.selectView.bind(this);
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


  render() {
    // Handle percent calculations here?
    // Would run every rerender might be performance loss, maybe can do it only when componentMounts and onClick
    // For now run it here
    // Make an array with objects month complete:


    // Recharts note
    // Make sure that dataKeys match the given dataKey to component prop

    // Make one for week
    // Need actualy date of Monday too relative to the current week we're in. So if Tuesday , grab last Monday. If Saturday grab last Monday
    // -> Begininng of Monday to end of Sunday, grab percent average for each date and recreate array with 7 objects Mon - Sun with percent average for each date

    // Month
    // -> Beginning of 1st of Month to end of Last day of Month
    // -> Arrray with 31 objects with average daily percent

    // Year
    // -> Jan 1st - Dec 31st
    // Array of 12 Objects
    // Average percent of each month

    const ButtonList = () => (
      <>
        <button onClick={() => this.selectView('day')}>Day View</button>
        <button onClick={() => this.selectView('week')}>Week View</button>
        <button onClick={() => this.selectView('month')}>Month View</button>
        <button onClick={() => this.selectView('year')}>Year View</button>
      </>
    );

    const DayConditonal = this.state.chartTimeFrame === 'day' ? <Day /> : null;

    return (
      <div className='dashboard-view'>
        <ButtonList />
        {DayConditonal}
      </div>
    );
  }
}

export default withNav(DashboardView);
