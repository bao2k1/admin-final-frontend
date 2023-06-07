import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Text } from 'recharts';

const data1 = [
  { name: 'Progress', value: 85 }, // Giá trị phần trăm của đường tròn
  { name: 'Remaining', value: 100 - 85 }, // Giá trị phần trăm còn lại
];
const data2 = [
  { name: 'Progress', value: 85 }, // Giá trị phần trăm của đường tròn
  { name: 'Remaining', value: 100 - 85 }, // Giá trị phần trăm còn lại
];
const data3 = [
  { name: 'Progress', value: 85 }, // Giá trị phần trăm của đường tròn
  { name: 'Remaining', value: 100 - 85 }, // Giá trị phần trăm còn lại
];
const data4 = [
  { name: 'Progress', value: 85 }, // Giá trị phần trăm của đường tròn
  { name: 'Remaining', value: 100 - 85 }, // Giá trị phần trăm còn lại
];
const COLORS = ['#0088FE', '#E8E8E8'];

const ChartPie = ({text,percent}) => {
  return (
    <ResponsiveContainer width={200} height={220}>
      <PieChart >
        <Pie
          data={data1}
          cx="50%"
          cy="50%"
          innerRadius={40}
          outerRadius={60}
          startAngle={90}
          endAngle={-270}
          dataKey="value"
          paddingAngle={0}
          isAnimationActive={false}
        >
          {data1.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" fontSize="20px" fontWeight="bold">
          {percent}%
        </text>
        <text x="50%" y="86%" textAnchor="middle" dominantBaseline="middle" fontSize="14px" >{text}</text>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default ChartPie;
