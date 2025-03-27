
import React, { useState } from "react";
import style from "../styles/settings.module.css";

function Settings() {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);

  React.useEffect(() => {
    document.title = "Admin | Setting";
  }, []);

  return (
    <div className={style.container}>
      <h2>Settings</h2>

      {/* Profile Settings */}
      <section className={style.section}>
        <h3>Profile Settings</h3>
        <label>Name: <input type="text" placeholder="Admin Name" /></label>
        <label>Email: <input type="email" placeholder="admin@example.com" /></label>
        <button>Update Profile</button>
      </section>

      {/* Account Settings */}
      <section className={style.section}>
        <h3>Account Settings</h3>
        <label>Change Password: <input type="password" placeholder="New Password" /></label>
        <button>Update Password</button>
      </section>

      {/* Theme Settings */}
      <section className={style.section}>
        <h3>Theme Settings</h3>
        <label>
          <input type="checkbox" checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
          Enable Dark Mode
        </label>
      </section>

      {/* Notification Settings */}
      <section className={style.section}>
        <h3>Notification Settings</h3>
        <label>
          <input type="checkbox" checked={notifications} onChange={() => setNotifications(!notifications)} />
          Enable Notifications
        </label>
      </section>
    </div>
  );
}

export default Settings;