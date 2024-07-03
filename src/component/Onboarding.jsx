import React from 'react';
import './Onboarding.css'; // Import the CSS file

function Onboarding() {
  return (
    <div className="onboarding-container">
      <h2>On-boarding</h2>
      <p>Welcome to the company! Please fill out the following information to complete your on-boarding process.</p>
      <form>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input type="text" className="form-control" id="firstName" />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input type="text" className="form-control" id="lastName" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" className="form-control" id="email" />
        </div>
        <div className="form-group">
          <label htmlFor="startDate">Start Date</label>
          <input type="date" className="form-control" id="startDate" />
        </div>
        <div className="form-group">
          <label htmlFor="position">Position</label>
          <input type="text" className="form-control" id="position" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default Onboarding;
