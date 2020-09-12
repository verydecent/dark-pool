import React from 'react';
import withNav from '../Hoc/withNav';
import './styles.css';
import axios from '../../Utilities/axiosConfig';
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
import moment from 'moment';

// Weekly view sounds the most simple
// So... Bring in tasks for all Current week starting Monday
// 100% is... The completion of that date, 100% is different amounts of total subtasks complete


// Task Percentage complete
// Each of Tasks Subtasks Complete ..... ???
// Each task has a different amount of subtasks so the percentage only will account for completeness
// 


// Percent complete
// Like amount? What will the highest amount be? Like 300? Can't really imagoine anyone making beyond that many

// Mon, Tues, Wed, Thurs, Fri, Sat, Sun
// Grab Tasks
// Subtasks complete / total will result in percent complete
// Maybe bar chart?

// Data

const data = [
  { month: 'Jan', completed: 1 },
  { month: 'Feb', completed: .9 },
  { month: 'Mar', completed: .80 },
  { month: 'Apr', completed: .20 },
  { month: 'May', completed: .70 },
  { month: 'Jun', completed: .60 },
  { month: 'Jul', completed: .90 },
  { month: 'Aug', completed: .80 },
  { month: 'Sep', completed: .40 },
  { month: 'Oct', completed: .12 },
  { month: 'Nov', completed: .45 },
  { month: 'Dec', completed: .100 }
];

// Change Y Axis into percent
const toPercent = (decimal, fixed = 0) => {
  return `${(decimal * 100).toFixed(fixed)}%`;
};

const getPercent = (value, total) => {
  const ratio = total > 0 ? value / total : 0;

  return toPercent(ratio, 2);
};
const renderTooltipContent = (o) => {
  const { payload, label } = o;
  return (
    <ul>
      {
        payload.map((entry, index) => {
          console.log('entry', entry.value);
          return (
            <li key={`item-${index}`} style={{ color: '#000', fontWeight: 700, fontSize: 20 }}>
              {`Percent Complete: ${Number.isNaN(entry.value) ? '0%' : toPercent(entry.value)}`}
            </li>
          )
        })
      }
    </ul>
  );
};

class DashboardView extends React.Component {
  constructor() {
    super();
    this.state = {
      userId: isAuthenticated()._id,
      dateA: '',
      dateB: '',
      tasksNull: false,
      tasks: []
    };

    this.selectDayView = this.selectDayView.bind(this);
    this.selectWeekView = this.selectWeekView.bind(this);
    this.selectMonthView = this.selectMonthView.bind(this);
    this.selectYearView = this.selectYearView.bind(this);
  }

  componentDidMount() {
    // Grab current date data
    const { userId } = this.state;
    const today = moment().startOf('day');
    const beginningOfTodayToDate = today.startOf('day').toDate();
    const endOfTodayToDate = moment(today).endOf('day').toDate();
    axios.get(`/task/${userId}?start_date=${beginningOfTodayToDate}&end_date=${endOfTodayToDate}`)
      .then(response => {
        if (response.data.length > 0) {
          this.setState({ tasks: response.data });
        }
        else {
          console.log('tasksNull');
          this.setState({ tasksNull: true });
        }
      })
      .catch(error => {
        console.log(error);
      })
  }

  selectDayView() {
    console.log('Select Day view')
  }

  selectWeekView() {
    console.log('Select Week view')
  }

  selectMonthView() {
    console.log('Select Month view')
  }

  selectYearView() {
    console.log('Select Year view')
  }



  render() {

    // Handle percent calculations here?
    // Would run every rerender might be performance loss, maybe can do it only when componentMounts and onClick
    // For now run it here
    // Make an array with objects month complete:
    const data1 = this.state.tasks.map(task => {
      // Task Completeness is how many subtasks complete out of total amount of subtasks
      // For loop
      const subtaskTotal = task.subtasks.length;
      console.log('subtaskTotal', subtaskTotal)
      let count = 0;
      task.subtasks.forEach(subtask => subtask.complete ? count += 1 : null);
      const decimal = count / subtaskTotal;
      const data = {
        title: task.title,
        completed: decimal
      }

      return data;
    });

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

    const data2 = [
      { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
      { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
      { name: 'Page C', uv: 2000, pv: 12000, amt: 2290 },
      { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
      { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
      { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
      { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
    ]

    const barChart = (
      <BarChart
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        width={800}
        height={500}
        data={data1}
      >
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey="title" />
        <YAxis
          type='number'
          domain={[0, 100]}
          // tickFormatter={toPercent}
          label='Percent'
        />
        <Tooltip
          cursor={{ fill: 'grey', stroke: '#000', strokeWidth: 1 }}
          content={renderTooltipContent}
        />
        <Bar
          dataKey='completed'
          fill="#82ca9d"
          barSize={30}
          background={false}
        />
      </BarChart>
    );

    const tasksNullMessage = 'There are no tasks for this date so we cannot display the data, please create some tasks';

    return (
      <div className='dashboard-view'>

        <button onClick={() => this.selectDayView()}>Day View</button>
        <button onClick={() => this.selectWeekView()}>Week View</button>
        <button onClick={() => this.selectMonthView()}>Month View</button>
        <button onClick={() => this.selectYearView()}>Year View</button>
        <div>

          {
            this.state.tasksNull
              ? tasksNullMessage
              : barChart
          }


          <LineChart width={600} height={300} data={data2}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="pv" stroke="#8884d8" fill="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </div>
      </div>
    );
  }
}

export default withNav(DashboardView);
