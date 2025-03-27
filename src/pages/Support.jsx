import React from 'react';
import style from "../styles/support.module.css";

function Support() {

  React.useEffect(() => {
    document.title = "Admin | Support";
  }, []);

  return (
    <div className={style.container}>
      <h2>Support</h2>

      <form className={style.form}>

        <label>Name</label>
        <input type="text" placeholder="Enter your name" />

        <label>Email</label>
        <input type="email" placeholder="Enter your email" />

        <label>Issue Type</label>
        <select>
          <option value="bug">Bug Report</option>
          <option value="feedback">Feedback</option>
          <option value="account">Account Issue</option>
        </select>

        <label>Message</label>
        <textarea placeholder="Describe your issue..."></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Support;
