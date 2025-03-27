
import React from 'react'
import style from "../styles/Navbar.module.css";
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className={style.header}>
      <div className={style.logo}>
        <h3>Admin</h3>
      </div>
      <nav className={style.nav}>
        <input type="text" name="filter_query" placeholder='filter users...' />
        <Link to="/messages"><i class="fa-solid fa-bell"></i></Link>

        <div className={style.profile}>
          <img src="/admin_avatar.jpg" alt="Admin Avatar" className={style.avatar} />

          <div className={style.profileOptions}>
            <Link to='/setting'> <i class="fa-solid fa-gear"></i> Settings</Link>
            <Link to='/'> <i class="fa-solid fa-right-from-bracket"></i> Logout</Link>
          </div>

        </div>
      </nav>
    </header>
  )
}

export default Navbar;