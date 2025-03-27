import React, { useState } from "react";
import style from "../styles/users.module.css";
import usersAPI from "../usersData/MOCK_DATA.json";

function Users() {
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 10; // Show 10 users per page
  const [roleFilter, setRoleFilter] = useState(""); // Filter by Role
  const [statusFilter, setStatusFilter] = useState(""); // Filter by Status

  // Get unique roles and statuses for dropdowns
  const roles = [...new Set(usersAPI.map(user => user.role))];
  const statuses = [...new Set(usersAPI.map(user => user.status))];

  // Filter users based on selected role and status
  const filteredUsers = usersAPI.filter(user => {
    return (
      (roleFilter === "" || user.role === roleFilter) &&
      (statusFilter === "" || user.status === statusFilter)
    );
  });

  // Pagination calculations
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  // Pagination functions
  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className={style.container}>
      <h2>User Management</h2>

      {/* Filtering Section */}
      <div className={style.filterContainer}>
        <label>Filter by Role:</label>
        <select onChange={(e) => setRoleFilter(e.target.value)} value={roleFilter}>
          <option value="">All</option>
          {roles.map((role) => (
            <option key={role} value={role}>
              {role}
            </option>
          ))}
        </select>

        <label>Filter by Status:</label>
        <select onChange={(e) => setStatusFilter(e.target.value)} value={statusFilter}>
          <option value="">All</option>
          {statuses.map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </select>
      </div>

      {/* Users Table */}
      <table className={style.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {currentUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>{user.status}</td>
              <td>
                <button className={style.editBtn}>Edit</button>
                <button className={style.deleteBtn}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div className={style.pagination}>
        <button onClick={prevPage} disabled={currentPage === 1}>
          Prev
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={nextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Users;
