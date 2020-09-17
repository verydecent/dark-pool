import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

// Helpers

const getPercent = (value, total) => {
  const ratio = total > 0 ? value / total : 0;

  return toPercent(ratio, 2);
};

const toPercent = (decimal, fixed = 0) => {
  return `${(decimal * 100).toFixed(fixed)}%`;
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
              {`${entry.name}: ${entry.value} (${getPercent(entry.value, total)})`}
            </li>
          ))
        }
      </ul>
    </div>
  );
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

// Graphs here

export const LineGraph = ({
  data
}) => {
  return (
    <LineChart
      width={1000}
      height={700}
      data={data}
      margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
      <XAxis
        dataKey="day"
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
  );
}