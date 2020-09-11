import React from 'react';
import withNav from '../Hoc/withNav';
import './styles.css';
import axios from '../../Utilities/axiosConfig';
import { isAuthenticated } from '../../Utilities/helpers';
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid
} from 'recharts';

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
  { month: 'Dec', completed: .100 },
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
  { month: 'Dec', completed: .100 },
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
  { month: 'Dec', completed: .100 },
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
        payload.map((entry, index) => (
          <li key={`item-${index}`} style={{ color: '#000', fontWeight: 700, fontSize: 20 }}>
            {`Percent Complete: ${toPercent(entry.value)}`}
          </li>
        ))
      }
    </ul>
  );
};

class DashboardView extends React.Component {
  constructor() {
    super();
    this.state = {
      userId: isAuthenticated()._id
    };
  }

  componentDidMount() {
    // Grab current date data
    axios.get('/task/')
  }

  render() {
    return (
      <div className='dashboard-view'>
        {/* Graph */}
        <div>
          <BarChart
            margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
            width={800}
            height={500}
            data={data}
          >
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey="month" />
            <YAxis tickFormatter={toPercent} />
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
        </div>
      </div>
    );
  }
}

export default withNav(DashboardView);
