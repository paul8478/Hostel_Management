import React, { useEffect, useState } from 'react';
import { getAllAdmins } from '../services/adminService';
import '../css/sidebar.css';
import '../css/student.css';

const Admin = () => {
  const [admins, setAdmins] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    getAllAdmins()
      .then(response => {
        setAdmins(response.data);
      })
      .catch(err => {
        setError('Failed to fetch admins');
        console.error(err);
      });
  }, []);

  return (
    <div className="box">
      <h1>Admin Data</h1> <a href='/addadmin'><button>Add Admin</button></a>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <table className="student-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Permission</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {admins.map(admin => (
            <tr key={admin.id}>
            <td>{admin.name}</td>
            <td>{admin.email}</td>
            <td>{admin.password}</td>
            <td>{admin.permission}</td>

            <td>
                <button>Edit</button>
                <button>Delete</button>
            </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Admin;
