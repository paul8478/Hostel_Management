import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getStudentById } from '../services/studentService'; // create this in service
import '../css/sidebar.css';
const StudentEdit = () => {
  const { id } = useParams(); // ⬅️ get student ID from URL
  const [student, setStudent] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    getStudentById(id)
      .then(response => setStudent(response.data))
      .catch(err => {
        setError('Failed to fetch student');
        console.error(err);
      });
  }, [id]);

  return (
    <div className="box">
      <h1>Edit Student</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {student ? (
        <div>
          <p><strong>Name:</strong> {student.name}</p>
          <p><strong>Roll Number:</strong> {student.rollnumber}</p>
          <p><strong>Email:</strong> {student.email}</p>
          <p><strong>Address:</strong> {student.address}</p>
          <p><strong>College ID:</strong> {student.colgid}</p>
          <p><strong>College Name:</strong> {student.college?.colgname || 'N/A'}</p>
          {/* You can replace the above with input fields if you want to allow editing */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default StudentEdit;
