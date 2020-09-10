import React from 'react';
import withNav from '../Hoc/withNav';
import './styles.css';
import { AreaChart, Area, XAxis, YAxis, Tooltip, Legend } from 'recharts';

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
];

// Change Y Axis into percent
const toPercent = (decimal, fixed = 0) => {
  return `${(decimal * 100).toFixed(fixed)}%`;
};

class DashboardView extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <div className='dashboard-view'>



        {/* Graph */}
        <div style={{
          border: '1px solid green'
        }}>
          <AreaChart
            margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
            width={500}
            height={500}
            data={data}
          >
            <XAxis dataKey="month" />
            <YAxis tickFormatter={toPercent} />
            <Tooltip />
            <Area type='monotone' dataKey='completed' stroke='#000' fill='#E44B6F' />
          </AreaChart>
        </div>
      </div>
    );
  }
}

export default withNav(DashboardView);
