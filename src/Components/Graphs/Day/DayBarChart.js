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
      />
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

  );
}

export default DayBarChart;