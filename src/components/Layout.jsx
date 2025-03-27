import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import style from "../styles/layout.module.css";
import { Outlet } from 'react-router-dom';

function Layout() {

  return (
    <div className={style.layout}>
      <Sidebar />

      <div className={style.mainContent}>
        <Navbar />
        <div className={style.content}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;