import React from 'react'
import { Link } from 'react-router-dom';
import style from "../styles/sidebar.module.css";

function Sidebar() {
  return (
    <aside className={style.sidebar}>

      <Link to='/'> <i class="fa-solid fa-gauge"></i> Dashboard</Link>
      <Link to='/setting'> <i class="fa-solid fa-gear"></i> Settings</Link>
      <Link to='/users'> <i class="fa-solid fa-user"></i> Users</Link>
      <Link to="/analytics"> <i class="fa-solid fa-chart-simple"></i> Analytics</Link>
      <Link to="/messages"> <i class="fa-solid fa-message"></i> Messages</Link>
      <Link to="/reports"> <i class="fa-solid fa-file-alt"></i> Reports</Link>
      <Link to="/support"> <i class="fa-solid fa-life-ring"></i> Support </Link>
    </aside>
  )
}

export default Sidebar;