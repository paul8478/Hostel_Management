import React, { useEffect, useState } from 'react';
import { getAllStudents } from '../services/studentService';
import '../css/sidebar.css';
import '../css/student.css';

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    getAllStudents()
      .then(response => {
        setStudents(response.data);
      })
      .catch(err => {
        setError('Failed to fetch students');
        console.error(err);
      });
  }, []);

  return (
    <div className="box">
      <h1>Students Data</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <table className="student-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Roll Number</th>
            <th>Email</th>
            <th>Address</th>
            <th>College ID</th>
            <th>College Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.rollnumber}</td>
              <td>{student.email}</td>
              <td>{student.address}</td>
              <td>{student.colgid}</td>
              <td>{student.college.colgname}</td>
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

export default StudentList;
