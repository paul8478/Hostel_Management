import React, { useEffect, useState } from 'react';
import { getAllColleges } from '../services/collegeService';
import '../css/sidebar.css';
import '../css/student.css';

const College = () => {
  const [colleges, setColleges] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    getAllColleges()
      .then(response => {
        setColleges(response.data);
      })
      .catch(err => {
        setError('Failed to fetch colleges');
        console.error(err);
      });
  }, []);

  return (
    <div className="box">
      <h1>College Data</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <table className="student-table">
        <thead>
          <tr>
            <th>college</th>
            <th>College ID</th>
                        <th>Action</th>

        
          </tr>
        </thead>
        <tbody>
          {colleges.map(college => (
            <tr key={college.id}>
            <td>{college.colgname}</td>
            <td>{college.id}</td>
            
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

export default College;
