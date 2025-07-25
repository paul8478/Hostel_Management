import React, { useEffect, useState } from 'react';
import { getAllStudents, createStudent } from '../services/studentService';
import { useNavigate } from 'react-router-dom'; // this for navigating to another page

import '../css/sidebar.css';
import '../css/student.css';

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    rollnumber: '',
    password: '',
    permission: '',
    email: '',
    address: '',
    colgid: '',
  });

  const [search, setSearch] = useState('');
  const [filteredStudents, setFilteredStudents] = useState([]);

  const navigate = useNavigate();// this is for navigating to another page

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = () => {
    getAllStudents()
      .then(response => {
        setStudents(response.data);
        setFilteredStudents(response.data); // initially show all
      })
      .catch(err => {
        setError('Failed to fetch students');
        console.error(err);
      });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const results = students.filter(student =>
      student.rollnumber.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredStudents(results);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createStudent(formData)
      .then(() => {
        setFormData({
          name: '',
          email: '',
          password: '',
          permission: '',
          rollnumber: '',
          address: '',
          colgid: '',
        });
        fetchStudents();
      })
      .catch(err => {
        setError('Failed to add student');
        console.error(err);
      });
  };

  return (
    <div className="box">
      <h1>Students Data</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {/* Add Student Form */}
      <form onSubmit={handleSubmit} className="admin-form">
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
        <input type="text" name="rollnumber" placeholder="Roll Number" value={formData.rollnumber} onChange={handleChange} required />
        <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} required />
        <input type="text" name="colgid" placeholder="College ID" value={formData.colgid} onChange={handleChange} required />
        <button type="submit">Add Student</button>
      </form>

      {/* Search Form */}
      <form onSubmit={handleSearchSubmit} className="admin-form">
        <input
          type="text"
          placeholder="Search by roll number"
          value={search}
          onChange={handleSearchChange}
        />
        <button type="submit">Search Student</button>
      </form>

      {/* Student Table */}
      <table className="student-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Roll </th>
            <th>Email</th>
            <th>Address</th>
            <th>Colg ID</th>
            <th>College Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.length > 0 ? (
            filteredStudents.map(student => (
              <tr key={student.id}>
                                <td>{student.id}</td>

                <td>{student.name}</td>
                <td>{student.rollnumber}</td>
                <td>{student.email}</td>
                <td>{student.address}</td>
                <td>{student.colgid}</td>
                <td>{student.college?.colgname || 'N/A'}</td>
                <td>
                  <button onClick={() => navigate(`/student/edit/${student.id}`)}>Edit</button>
                  <button>Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7">No students found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
