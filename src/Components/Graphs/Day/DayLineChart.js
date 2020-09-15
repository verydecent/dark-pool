import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid
} from 'recharts';

const DayLineChart = ({
  data
}) => {
  console.log('data', data);
  return (
    <LineChart
      width={1000}
      height={700}
      data={data}
      margin={{ top: 0, right: 0, left: 30, bottom: 0 }}>
      <XAxis
        dataKey="title"
      />
      <YAxis
        label='subtasks'
      />
      <CartesianGrid
        strokeDasharray="3 3"
      />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="total"
        stroke="#8884d8"
        fill="#8884d8"
        activeDot={{ r: 8 }}
      />
      <Line
        type="monotone"
        dataKey="incomplete"
        fill="#ffc658"
        stroke="#ffc658"
        activeDot={{ r: 8 }}
      />
      <Line
        type="monotone"
        dataKey="complete"
        fill="#82ca9d"
        stroke="#82ca9d"
        activeDot={{ r: 8 }}
      />
    </LineChart>
  )
}

export default DayLineChart;