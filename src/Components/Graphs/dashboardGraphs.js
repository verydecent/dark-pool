import React from 'react';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  AreaChart,
  Area,
  Tooltip,
  Legend,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts'
import {
  getSubtaskIncompleteFromTasks,
  getSubtaskCompletedFromTasks,
  getTaskCompleted,
  getTaskIncomplete
} from '../../Utilities/subtaskHelpers';

// Global Margin
const margin = {
  top: 20,
  bottom: 20,
  left: 20,
  right: 20
}

// Area Chart helpers
const getPercent = (value, total) => {
  const ratio = total > 0 ? value / total : 0;

  return toPercent(ratio, 2);
};

const renderAreaChartTooltipContent = (o) => {
  const { payload, label } = o;
  const total = payload.reduce((result, entry) => (result + entry.value), 0);

  return (
    <div className="customized-tooltip-content">
      <p className="total">{`${label} (Total: ${total})`}</p>
      <ul className="list">
        {
          payload.map((entry, index) => (
            <li key={`item-${index}`} style={{ color: entry.color }}>
              {`${entry.name}: ${entry.value}(${getPercent(entry.value, total)})`}
            </li>
          ))
        }
      </ul>
    </div>
  );
};

// Line Chart helpers
const toPercent = (decimal, fixed = 0) => {
  return `${(decimal * 100).toFixed(fixed)}%`;
};

const renderLineChartTooltipContent = (o) => {
  const { payload, label } = o;
  return (
    <ul>
      {
        payload.map((entry, index) => {
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

// Graphs
export const LineGraph = ({
  data,
  xAxisDataKey,
}) => {
  return (
    <ResponsiveContainer width='99%' height={500}>
      <LineChart
        data={data}
        margin={margin}
      >
        <XAxis
          dataKey={xAxisDataKey}
        />
        <YAxis
          tickFormatter={toPercent}
        />
        <CartesianGrid
          strokeDasharray="3 3"
        />
        <Tooltip
          cursor={{ fill: 'grey', stroke: '#000', strokeWidth: 1 }}
          content={renderLineChartTooltipContent}
        />
        {/* <Legend /> */}
        <Line
          type="monotone"
          dataKey="percent"
          stroke="#E44B6F"
          fill="#fff"
          activeDot={{ r: 10 }}
          dot={{ r: 10 }}
        />
      </LineChart>
    </ResponsiveContainer >
  );
}

export const BarGraph = ({
  data,
}) => {
  return (
    <ResponsiveContainer width='99%' height={500}>
      <BarChart
        margin={margin}
        data={data}
      >
        <CartesianGrid
          strokeDasharray='3 3'
        />
        <XAxis
          dataKey="title"
        />
        <YAxis />
        <Tooltip />
        <Bar
          dataKey='total'
          fill="#000"
          barSize={30}
          background={false}
        />
        <Bar
          dataKey='complete'
          fill="#0000ff"
          barSize={30}
          background={false}
        />
        <Bar
          dataKey='incomplete'
          fill="#ff0000"
          barSize={30}
          background={false}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}

export const AreaGraph = ({
  data
}) => {
  return (
    <ResponsiveContainer width='99%' height={500}>
      <AreaChart
        data={data}
        stackOffset="expand"
        margin={margin}
      >
        <XAxis
          dataKey="title"
        />
        <YAxis
          tickFormatter={toPercent}
        />
        {/* <Tooltip /> */}
        <Tooltip
          content={renderAreaChartTooltipContent}
        />
        <Area
          type='monotone'
          dataKey='complete'
          stackId="1"
          stroke='#8884d8'
          fill='#8884d8'
        />
        <Area
          type='monotone'
          dataKey='incomplete'
          stackId="1"
          stroke='#82ca9d'
          fill='#82ca9d'
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

// Gauge helpers
const TASKCOLORS = ['#E44B6F', '#4A4B4F'];
const SUBTASKCOLORS = ['#418BCA', '#4A4B4F'];
const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export const SubtaskGauge = ({
  tasks
}) => {
  const completed = getSubtaskCompletedFromTasks(tasks);
  const incomplete = getSubtaskIncompleteFromTasks(tasks);

  const data = [{ name: 'Subtasks Completed', value: completed }, { name: 'Subtasks Incomplete', value: incomplete }]
  // do one for tasks complete, and subtasks complete ?
  return (
    <ResponsiveContainer width='99%' height={250}>
      <PieChart
        margin={margin}
      >
        <Legend />
        <Pie
          data={data}
          dataKey='value'
          labelLine={false}
          label={renderCustomizedLabel}
          innerRadius={12}
        >
          {data.map((entry, index) => <Cell fill={SUBTASKCOLORS[index % SUBTASKCOLORS.length]} key={index} />)}
        </Pie>
      </PieChart >
    </ResponsiveContainer>
  );
}

export const TaskGauge = ({
  tasks
}) => {
  const completed = getTaskCompleted(tasks);
  const incomplete = getTaskIncomplete(tasks);

  const data = [{ name: 'Tasks Completed', value: completed }, { name: 'Tasks Incomplete', value: incomplete }]
  // do one for tasks complete, and subtasks complete ? 
  return (
    <ResponsiveContainer width='99%' height={250}>
      <PieChart
        margin={margin}
      >
        <Legend />
        <Pie
          data={data}
          dataKey='value'
          labelLine={false}
          label={renderCustomizedLabel}
          innerRadius={12}
        >
          {data.map((entry, index) => <Cell fill={TASKCOLORS[index % TASKCOLORS.length]} key={index} />)}
        </Pie>
      </PieChart >
    </ResponsiveContainer>
  );
}