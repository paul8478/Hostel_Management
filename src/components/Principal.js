import React, { useEffect, useState } from 'react';
import { getAllPrincipals } from '../services/principalService';
import '../css/sidebar.css';
import '../css/student.css';

const Principal = () => {
  const [principals, setPrincipals] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    getAllPrincipals()
      .then(response => {
        setPrincipals(response.data);
      })
      .catch(err => {
        setError('Failed to fetch principals');
        console.error(err);
      });
  }, []);

  return (
    <div className="box">
      <h1>Principal Data</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <table className="student-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>College ID</th>
            <th>College</th>
            <th>Permission</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {principals.map(principal => (
            <tr key={principal.id}>
            <td>{principal.name}</td>
            <td>{principal.email}</td>
            <td>{principal.password}</td>
            <td>{principal.colgid}</td>
            <td>{principal.college.colgname}</td>
            <td>{principal.permission}</td>
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

export default Principal;
