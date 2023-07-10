

import React, { useContext } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import { dataContext } from "../../Context";

export default function Bchart() {
  const {array} = useContext(dataContext);
  return (
    <BarChart
      width={500}
      height={200}
      data={array}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="sector" />
      <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
      <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
      <Tooltip />
      <Legend />
      <Bar yAxisId="left" dataKey="start_year" fill="#8884d8" />
      <Bar yAxisId="right" dataKey="end_year" fill="#82ca9d" />
    </BarChart>
  );
}
