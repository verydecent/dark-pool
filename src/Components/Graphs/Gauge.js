import React from 'react';
import {
  PieChart,
  Pie,
  Cell,
  Legend
} from 'recharts';
import shortid from 'shortid';

const subtasksTotal = subtasks => subtasks.length;
const subtasksComplete = subtasks => {
  let count = 0;
  subtasks.forEach(subtask => {
    if (subtask.complete) count += 1;
    else return;
  })
  return count;
};

const COLORS = ['#01B074', '#4A4B4F'];
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

const Gauge = ({
  subtasks
}) => {
  const subtasksUpdated = subtasks ? subtasks : [];
  const complete = subtasksComplete(subtasksUpdated);
  const total = subtasksTotal(subtasksUpdated);
  const remaining = total - complete;
  const percentComplete = `${Math.round((complete / total) * 100)} %`;
  const data = [{ name: 'Subtasks Completed', value: complete }, { name: 'Subtasks Incomplete', value: remaining }];

  return (
    <PieChart width={200} height={200}>
      <Legend />
      <Pie
        data={data}
        labelLine={false}
        label={renderCustomizedLabel}
      >
        {data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]} key={shortid.generate()} />)}
      </Pie>
    </PieChart >
  );
}

export default Gauge;