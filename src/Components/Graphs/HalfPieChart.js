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
  const percentComplete = `${Math.round((complete / total) * 100)} %`;
  const data = [{ name: 'Group A', value: complete }, { name: 'Group B', value: remaining }];
  // const COLORS = ['#005EA6', '#4A4B4F']; Blue
  const COLORS = ['#01B074', '#4A4B4F'];


  return (
    <PieChart width={200} height={300}>
      <Pie
        data={data}
        cx={100}
        cy={200}
        startAngle={180}
        endAngle={0}
        innerRadius={60}
        outerRadius={80}
        fill='transparent'
        stroke='none'
        paddingAngle={0}
      >
        {
          data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]} />)
        }
        <Label
          style={{
            fontSize: 20,
            fill: '#fff'
          }}
          value={`${remaining === 0 ? 'Complete!' : percentComplete}`}
          offset={0}
          position="center"
        />

      </Pie>
    </PieChart >
  );
}

export default HalfPieChart;