import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Attendance from './pages/Attendance';
import Students from './pages/Students';
import Login from './pages/Login';
import { AttendanceProvider } from './context/AttendanceContext';

function App() {
  return (
    <Router>
      <AttendanceProvider> 
        <div className="flex h-screen overflow-hidden">
          <Sidebar />
          <div className="flex-1 p-4 overflow-hidden">
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/attendance" element={<Attendance />} />
              <Route path="/students" element={<Students />} />
              <Route path="/logout" element={<Login />} />
            </Routes>
          </div>
        </div>
      </AttendanceProvider>
    </Router>
  );
}

export default App;
