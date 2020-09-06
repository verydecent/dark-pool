import React from 'react';
import {
  PieChart,
  Pie,
  Cell,
  Label,
  Text
} from 'recharts';

const data = [{ name: 'Group A', value: .5 }, { name: 'Group B', value: .5 }];
const COLORS = ['#0088FE', 'transparent'];

const HalfPieChart = () => {
  return (
    <PieChart width={300} height={300}>
      <Pie
        data={data}
        cx={200}
        cy={200}
        startAngle={180}
        endAngle={0}
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