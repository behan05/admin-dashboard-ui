import React from "react";
import { transactions } from "../transactions/transactions";
import style from "../styles/transactionsTable.module.css";

function TransactionsTable() {
  return (
    <div className={style.tableContainer}>
      <h2>Recent Transactions</h2>
      <table className={style.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>User</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((txn) => (
            <tr key={txn.id}>
              <td>{txn.id}</td>
              <td>{txn.user}</td>
              <td>{txn.amount}</td>
              <td className={txn.status === "Completed" ? style.completed : txn.status === "Pending" ? style.pending : style.failed}>
                {txn.status}
              </td>
              <td>{txn.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionsTable;
