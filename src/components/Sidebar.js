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
          <li><Link to="/Principals">Principal</Link></li>
                    <li><Link to="/Hostels">Hostel</Link></li>
          <li><Link to="/Colleges">Colleges</Link></li>
          <li><Link to="/Admins">Admins</Link></li>

          {/* Add more links as needed */}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
