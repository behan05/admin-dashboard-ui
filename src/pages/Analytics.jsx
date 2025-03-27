import React from "react";
import style from "../styles/analytics.module.css";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

const userGrowthData = [
  { month: "Jan", users: 400 },
  { month: "Feb", users: 800 },
  { month: "Mar", users: 1500 },
  { month: "Apr", users: 2000 },
  { month: "May", users: 2500 },
];

const revenueData = [
  { month: "Jan", revenue: 5000 },
  { month: "Feb", revenue: 7000 },
  { month: "Mar", revenue: 9000 },
  { month: "Apr", revenue: 11000 },
  { month: "May", revenue: 13000 },
];

function Analytics() {
  return (
    <div className={style.container}>
      <h2>Analytics Dashboard</h2>

      <div className={style.stats}>
        <div className={style.statCard}>
          <h3>Total Users</h3>
          <p>2,500</p>
        </div>
        <div className={style.statCard}>
          <h3>Revenue</h3>
          <p>$13,000</p>
        </div>
        <div className={style.statCard}>
          <h3>Active Users</h3>
          <p>1,800</p>
        </div>
      </div>

      <div className={style.charts}>
        <div className={style.chart}>
          <h3>User Growth</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={userGrowthData}>
              <XAxis dataKey="month" />
              <YAxis />
              <CartesianGrid stroke="#ccc" />
              <Tooltip />
              <Line type="monotone" dataKey="users" stroke="#8884d8" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className={style.chart}>
          <h3>Revenue Growth</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={revenueData}>
              <XAxis dataKey="month" />
              <YAxis />
              <CartesianGrid stroke="#ccc" />
              <Tooltip />
              <Bar dataKey="revenue" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
