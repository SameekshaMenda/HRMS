import React from 'react';
import './LeaveManagement.css';

function LeaveManagement() {
  return (
    <div className="leave-container">
      <h2>Leave Request Form</h2>
      <form>
        <div className="form-group">
          <label htmlFor="leaveType">Leave Type</label>
          <select className="form-control" id="leaveType">
            <option>Sick Leave</option>
            <option>Casual Leave</option>
            <option>Vacation</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="startDate">Start Date</label>
          <input type="date" className="form-control" id="startDate" />
        </div>
        <div className="form-group">
          <label htmlFor="endDate">End Date</label>
          <input type="date" className="form-control" id="endDate" />
        </div>
        <div className="form-group">
          <label htmlFor="reason">Reason</label>
          <textarea className="form-control" id="reason" rows="3"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default LeaveManagement;