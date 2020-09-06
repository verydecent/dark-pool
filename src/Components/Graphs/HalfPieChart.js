import React from 'react';
import {
  PieChart,
  Pie,
  Cell,
  Label,
  Text
} from 'recharts';

const subtasksTotal = subtasks => subtasks.length;
const subtasksComplete = subtasks => {
  let count = 0;
  subtasks.forEach(subtask => {
    if (subtask.complete) count += 1;
    else return;
  })
  return count;
};

const HalfPieChart = ({
  subtasks
}) => {
  const subtasksUpdated = subtasks ? subtasks : [];
  const complete = subtasksComplete(subtasksUpdated);
  const total = subtasksTotal(subtasksUpdated);
  const remaining = total - complete;


  const data = [{ name: 'Group A', value: complete }, { name: 'Group B', value: remaining }];
  const COLORS = ['#0088FE', 'transparent'];

  return (
    <PieChart width={300} height={300}>
      <Pie
        data={data}
        cx={200}
        cy={200}
        startAngle={0}
        endAngle={180}
        innerRadius={60}
        outerRadius={80}
        fill="transparent"
        stroke='none'
        paddingAngle={0}
      >
        {
          data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]} />)
        }
        <Label value="Center" offset={0} position="center" />

      </Pie>
    </PieChart >
  );
}

export default HalfPieChart;