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
      width={600}
      height={300}
      data={data}
      margin={{ top: 0, right: 0, left: 30, bottom: 0 }}>
      <XAxis
        dataKey="title"
      />
      <YAxis />
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
      {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
    </LineChart>
  )
}

export default DayLineChart;