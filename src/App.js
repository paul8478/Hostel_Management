import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Sidebar from './components/Sidebar';
import StudentList from './components/StudentList';
import Principal from './components/Principal';
import Hostel from './components/Hostel';
import College from './components/College';
import Admin from './components/Admin';
import AddAdmin from './components/Addadmin';
// import other pages/components like AddStudent etc.

function App() {
  return (
    <Router>
      <div className="app-container" style={{ display: 'flex' }}>
        <Sidebar />
        <div className="main-content" style={{ flex: 1, padding: '20px' }}>
          <Routes>
            <Route path="/" element={<h1>Welcome Home</h1>} />
            <Route path="/students" element={<StudentList />} />
            <Route path="/principals" element={<Principal />} />
            <Route path="/hostels" element={<Hostel />} />
            <Route path="/colleges" element={<College />} />
            <Route path="/admins" element={<Admin />} />
            <Route path="/addadmin" element={<AddAdmin />} />



            {/* Add other routes here */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
