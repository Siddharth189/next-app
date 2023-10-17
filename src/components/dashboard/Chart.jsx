import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Rectangle,
  Label,
} from "recharts";

const data = [
  {
    name: "Week 1",
    guest: 400,
    user: 500,
    amt: 2400,
  },
  {
    name: "Week 2",
    guest: 450,
    user: 350,
    amt: 2210,
  },
  {
    name: "Week 3",
    guest: 300,
    user: 200,
    amt: 2290,
  },
  {
    name: "Week 4",
    guest: 340,
    user: 400,
    amt: 2000,
  },
];

// Define a custom shape function to round the corners
const RoundedBar = (props) => {
  const { x, y, width, height, radius } = props;

  return (
    <Rectangle
      x={x}
      y={y}
      width={width}
      height={height}
      radius={[radius, radius, 0, 0]}
      {...props}
    />
  );
};

export default class Chart extends PureComponent {
  render() {
    return (
      <div className="chart">
        <div className="chart-title">
          <span>
            <h2>Activities</h2>
            <p>May-June 2021</p>
          </span>
          <span
            style={{ fontFamily: "Lato", fontSize: "14px", fontWeight: "400" }}
          >
            <span
              className="colored-circle"
              style={{ backgroundColor: "#E9A0A0" }}
            ></span>
            Guest
            <span
              className="colored-circle"
              style={{ backgroundColor: "#9BDD7C", marginLeft: "40px" }}
            />
            User
          </span>
        </div>

        <ResponsiveContainer width="100%" height="80%">
          <BarChart
            width={400}
            height={400}
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 30,
              bottom: 20,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis domain={[0, 500]} ticks={[0, 100, 200, 300, 400, 500]} />
            <Tooltip />
            <Bar
              dataKey="user"
              fill="#98D89E"
              barSize={60}
              shape={<RoundedBar radius={8} />}
            />
            <Bar
              dataKey="guest"
              fill="#EE8484"
              barSize={60}
              shape={<RoundedBar radius={8} />}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
