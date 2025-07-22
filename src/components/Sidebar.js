import React from 'react';
import { Link } from 'react-router-dom';
import '../css/sidebar.css'; // Assuming you have a CSS file for styling

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>DASHBOARD</h2>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/students">Students</Link></li>
          <li><Link to="/add-student">Add Student</Link></li>
          {/* Add more links as needed */}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
