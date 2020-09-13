import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid
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

const data1 = [].map(task => {
  // Task Completeness is how many subtasks complete out of total amount of subtasks
  // For loop
  const subtaskTotal = task.subtasks.length;
  let count = 0;
  task.subtasks.forEach(subtask => subtask.complete ? count += 1 : null);
  const decimal = count / subtaskTotal;
  const data = {
    title: task.title,
    completed: decimal
  }

  return data;
});

const DayBarChart = () => {
  return (
    <>
      <BarChart
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        width={800}
        height={500}
        data={data1}
      >
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey="title" />
        <YAxis
          // type='number'
          // domain={[0, 100]}
          // label='Percent'
          tickFormatter={toPercent}
        />
        <Tooltip
          cursor={{ fill: 'grey', stroke: '#000', strokeWidth: 1 }}
        // content={renderTooltipContent}
        />
        <Bar
          dataKey='completed'
          fill="#82ca9d"
          barSize={30}
          background={false}
        />
      </BarChart>
    </>
  );
}

export default DayBarChart;