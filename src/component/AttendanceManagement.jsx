import React from 'react';
import Table from 'react-bootstrap/Table';
import './AttendanceManagement.css'; 

function ResponsiveExample() {

  const employeeData = [
    { id: 1, name: 'John Doe', position: 'Software Engineer', department: 'Engineering', salary: '$80,000' },
    { id: 2, name: 'Jane Smith', position: 'Product Manager', department: 'Product', salary: '$100,000' },
    { id: 3, name: 'Michael Johnson', position: 'Marketing Specialist', department: 'Marketing', salary: '$75,000' },
    { id: 4, name: 'Emily Brown', position: 'HR Manager', department: 'Human Resources', salary: '$90,000' },
    { id: 5, name: 'Alex Lee', position: 'Sales Representative', department: 'Sales', salary: '$85,000' },
    { id: 6, name: 'Sarah Williams', position: 'Finance Analyst', department: 'Finance', salary: '$85,000' },
    { id: 7, name: 'David Clark', position: 'Operations Manager', department: 'Operations', salary: '$95,000' },
    { id: 8, name: 'Jessica Taylor', position: 'Customer Support Specialist', department: 'Customer Support', salary: '$70,000' },
    { id: 9, name: 'Kevin Martinez', position: 'IT Technician', department: 'IT', salary: '$80,000' },
    { id: 10, name: 'Linda Nguyen', position: 'Administrative Assistant', department: 'Admin', salary: '$60,000' },
    // Add more rows as needed
  ];

  return (
    <div className="attendance-table">
      <Table responsive striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Position</th>
            <th>Department</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {}
          {Array.from({ length: Math.max(10, employeeData.length) }).map((_, index) => (
            <tr key={index}>
              <td>{employeeData[index]?.id}</td>
              <td>{employeeData[index]?.name}</td>
              <td>{employeeData[index]?.position}</td>
              <td>{employeeData[index]?.department}</td>
              <td>{employeeData[index]?.salary}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default ResponsiveExample;
