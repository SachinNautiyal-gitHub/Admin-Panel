import React, { useContext } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";
import { dataContext } from "../../Context";

export default function Achart() {
  const {array} = useContext(dataContext)
  return (
    <AreaChart
      width={440}
      height={200}
      data={array}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="topic" />
      <YAxis />
      <Tooltip />
      <Area type="monotone" dataKey="start_year" stroke="#8884d8" fill="#8884d8" />
    </AreaChart>
  );
}
