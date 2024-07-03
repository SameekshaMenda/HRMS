import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import Sidebar from './component/Sidebar';
import Home from './component/Home';
import LeaveManagement from './component/LeaveManagement';
import AttendanceManagement from './component/AttendanceManagement';
import Onboarding from './component/Onboarding';
import PolicyDocuments from './component/PolicyDocuments';


function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/leave-management" element={<LeaveManagement />} />
          <Route path="/attendance-management" element={<AttendanceManagement />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/policy-documents" element={<PolicyDocuments />} />
         
        </Routes>
      </>
    </Router>
  );
}

export default App;
