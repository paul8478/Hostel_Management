import React, { useEffect, useState } from 'react';
import { getAllPrincipals, createPrincipal } from '../services/principalService'; // ✅ Correct import
import '../css/sidebar.css';
import '../css/student.css';

const Principal = () => {
  const [principals, setPrincipals] = useState([]);
  const [error, setError] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    colgid: '',
    password: '',
    email: '',
    
  });

  useEffect(() => {
    fetchPrincipals();
  }, []);

  const fetchPrincipals = () => {
    getAllPrincipals()
      .then(response => setPrincipals(response.data))
      .catch(err => {
        setError('Failed to fetch principals');
        console.error(err);
      });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createPrincipal(formData)
      .then(() => {
        setFormData({
          name: '',
    colgid: '',
    password: '',
    email: '',
        });
        fetchPrincipals(); // refresh list
      })
      .catch(err => {
        setError('Failed to add principal');
        console.error(err);
      });
  };

  return (
    <div className="box">
      <h1>Principal Data</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {/* Add Principal Form */}
      <form onSubmit={handleSubmit} className="admin-form">
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
        <input type="text" name="colgid" placeholder="College ID" value={formData.colgid} onChange={handleChange} required />
        <button type="submit">Add Principal</button>
      </form>

      {/* Principal Table */}
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
              <td>{principal.college?.colgname || 'N/A'}</td>
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
