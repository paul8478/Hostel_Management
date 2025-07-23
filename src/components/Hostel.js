import React, { useEffect, useState } from 'react';
import { getAllHostels } from '../services/hostelService';
import '../css/sidebar.css';
import '../css/student.css';

const Hostel = () => {
  const [hostels, setHostels] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    getAllHostels()
      .then(response => {
        setHostels(response.data);
      })
      .catch(err => {
        setError('Failed to fetch hostels');
        console.error(err);
      });
  }, []);

  return (
    <div className="box">
      <h1>Hostel Data</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <table className="student-table">
        <thead>
          <tr>
            <th>college</th>
            <th>block</th>
            <th>room</th>
            <th>availability</th>
            <th>money</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {hostels.map(hostel => (
            <tr key={hostel.id}>
            <td>{hostel.college.colgname}</td>
            <td>{hostel.block}</td>
            <td>{hostel.room}</td>
            <td>{hostel.avail}</td>
            <td>{hostel.money}</td>
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

export default Hostel;
