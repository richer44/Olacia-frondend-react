import React from 'react';
import {
  Line,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

interface DataPoint {
  date: string;
  messages: number;
  visitors: number;
  chats: number;
}

interface LineChartProps {
  data: DataPoint[];
}

const MultiLineChart: React.FC<LineChartProps> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" fontSize={12} />
        <YAxis fontSize={12}/>
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="messages" name="Messages" stroke="#82ca9d" />
        <Line type="monotone" dataKey="visitors" name="Visitors" stroke="#8884d8" />
        <Line type="monotone" dataKey="chats" name="Chats" stroke="#ffc658" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default MultiLineChart;
