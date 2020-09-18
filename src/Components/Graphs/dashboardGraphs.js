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
  ResponsiveContainer
} from 'recharts';

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
        margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
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
          stroke="#8884d8"
          fill="#8884d8"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

export const BarGraph = ({
  data,
}) => {
  return (
    <ResponsiveContainer width='99%' height={500}>
      <BarChart
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
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
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
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