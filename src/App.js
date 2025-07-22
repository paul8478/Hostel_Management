import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Sidebar from './components/Sidebar';
import StudentList from './components/StudentList';
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
            {/* Add other routes here */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
