import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer
} from 'recharts';

const toPercent = (decimal, fixed = 0) => {
  return `${(decimal * 100).toFixed(fixed)}%`;
};

const renderTooltipContent = (o) => {
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

const DayBarChart = ({
  data
}) => {
  return (
    <BarChart
      margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
      width={1000}
      height={700}
      data={data}
    >
      <CartesianGrid
        strokeDasharray='3 3'
      />
      <XAxis
        dataKey="title"
      />
      <YAxis
        // type='number'
        // domain={[0, 100]}
        // label='Percent'
        tickFormatter={toPercent}
      />
      <Tooltip
        cursor={{ fill: 'grey', stroke: '#000', strokeWidth: 1 }}
        content={renderTooltipContent}
      />
      <Bar
        dataKey='percent'
        fill="#82ca9d"
        barSize={30}
        background={false}
      />
    </BarChart>

  );
}

export default DayBarChart;