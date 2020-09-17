import React from 'react';
import { LineChart, Line, xAxis, yAxis } from 'recharts';

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
        dataKey="title"
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