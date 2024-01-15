import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';

interface Data {
  dates: string[];
  messages: number[];
  visitors: number[];
  chats: number[];
}

interface HistogramChartProps {
  data: Data;
}

const HistogramChart: React.FC<HistogramChartProps> = ({ data }) => {
  return (
    <BarChart width={500} height={300} data={data.dates.map((date, index) => ({
      date,
      messages: data.messages[index],
      visitors: data.visitors[index],
      chats: data.chats[index],
    }))}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="messages" fill="rgba(75,192,192,0.8)" stroke="rgba(75,192,192,1)" />
      <Bar dataKey="visitors" fill="rgba(255,99,132,0.8)" stroke="rgba(255,99,132,1)" />
      <Bar dataKey="chats" fill="rgba(255,206,86,0.8)" stroke="rgba(255,206,86,1)" />
    </BarChart>
  );
};

export default HistogramChart;
