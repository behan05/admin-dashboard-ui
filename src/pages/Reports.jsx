import React from "react";
import style from "../styles/reports.module.css";

function Reports() {

  React.useEffect(() => {
    document.title = "Admin Reports"
  },[]);

  return (
    <div className={style.container}>
      <h2>Reports & Analytics</h2>

      <div className={style.reportSection}>
        <h3>Summary Report</h3>
        <p>Total Users: <span>1,200</span></p>
        <p>Active Users: <span>950</span></p>
        <p>Inactive Users: <span>250</span></p>
      </div>

      <div className={style.reportSection}>
        <h3>Performance Overview</h3>
        <p>Monthly Revenue: <span>$50,000</span></p>
        <p>Daily Active Users: <span>4,500</span></p>
      </div>

      <div className={style.reportSection}>
        <h3>Export Report</h3>
        <button className={style.button}>Download PDF</button>
        <button className={style.button}>Download CSV</button>
      </div>
    </div>
  );
}

export default Reports;
