
import React, { useState } from 'react';
import style from "../styles/dashboard.module.css";
import Card from '../components/Card';
import SalesChart from '../components/Chart';
import TransactionsTable from '../components/TransactionsTable';

function Dashboard() {

  const [users, setUsers] = useState({
    totalUsers: 0,
    revenue: 0,
    orders: 0,
    activeUsers: 0
  });


  React.useEffect(() => {
    document.title = "Admin | Dashboard";


    fetch("https://jsonplaceholder.typicode.com/users")
      .then(responseObject => {
        return responseObject.json();
      })
      .then(users => {
        setUsers({
          totalUsers: users.length,
          revenue: Math.floor(Math.random() * 10000) + 5000,
          orders: Math.floor(Math.random() * 500),
          activeUsers: Math.floor(users.length * 0.8)
        })
      })
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className={style.container}>
      <div className={style.statCardsContainer}>
        <Card icon={<i class="fa-solid fa-users"></i>} title="Total Users" liveData={users.totalUsers} />
        <Card icon={<i class="fa-solid fa-dollar-sign"></i>} title="Revenue" liveData={users.revenue} />
        <Card icon={<i class="fa-solid fa-box"></i>} title="Orders" liveData={users.orders} />
        <Card icon={<i class="fa-solid fa-user-check"></i>} title="Active Users" liveData={users.activeUsers} />
      </div>

      <div className={style.chart}>
        <SalesChart />
      </div>

      <div className={style.table}>
        <TransactionsTable />
      </div>
    </div>
  )
}

export default Dashboard;