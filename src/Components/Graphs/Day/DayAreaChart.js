import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';

const getPercent = (value, total) => {
  const ratio = total > 0 ? value / total : 0;

  return toPercent(ratio, 2);
};

const toPercent = (decimal, fixed = 0) => {
  return `${(decimal * 100).toFixed(fixed)}%`;
};

const renderTooltipContent = (o) => {
  const { payload, label } = o;
  const total = payload.reduce((result, entry) => (result + entry.value), 0);

  return (
    <div className="customized-tooltip-content">
      <p className="total">{`${label} (Total: ${total})`}</p>
      <ul className="list">
        {
          payload.map((entry, index) => (
            <li key={`item-${index}`} style={{ color: entry.color }}>
              {`${entry.name}: ${entry.value} (${getPercent(entry.value, total)})`}
            </li>
          ))
        }
      </ul>
    </div>
  );
};

const DayAreaChart = ({
  data
}) => {
  return (
    <AreaChart
      width={1000}
      height={700}
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
        content={renderTooltipContent}
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
      {/* <Area type='monotone' dataKey='c' stackId="1" stroke='#ffc658' fill='#ffc658' /> */}
    </AreaChart>
  );
}

export default DayAreaChart;