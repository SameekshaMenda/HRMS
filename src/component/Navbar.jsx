import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">Inunity HRMS</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/leave-management">Leave Management</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/attendance-management">Attendance Management</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/onboarding">On-boarding</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/policy-documents">Policy Documents</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
