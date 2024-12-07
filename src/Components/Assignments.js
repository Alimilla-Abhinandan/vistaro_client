import React, { useState } from 'react';

const Assignments = () => {
  const [assignments, setAssignments] = useState([
    {
      id: 1,
      title: 'React Basics',
      description: 'Build a simple React app with functional components.',
      dueDate: '2024-12-15',
      status: 'Pending',
    },
    {
      id: 2,
      title: 'Node.js API',
      description: 'Create a RESTful API using Express and Node.js.',
      dueDate: '2024-12-20',
      status: 'Submitted',
    },
    {
      id: 3,
      title: 'MongoDB Basics',
      description: 'Design a database schema and perform CRUD operations.',
      dueDate: '2024-12-22',
      status: 'Pending',
    },
  ]);

  const containerStyle = {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    maxWidth: '800px',
    margin: '0 auto',
    backgroundColor: '#f9fafb',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const headerStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#1e3a8a',
  };

  const assignmentListStyle = {
    listStyleType: 'none',
    padding: 0,
  };

  const assignmentItemStyle = {
    backgroundColor: '#ffffff',
    padding: '15px',
    borderRadius: '10px',
    marginBottom: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const assignmentInfoStyle = {
    flex: 1,
    marginRight: '10px',
  };

  const titleStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '5px',
    color: '#333',
  };

  const descriptionStyle = {
    fontSize: '14px',
    color: '#64748b',
    marginBottom: '10px',
  };

  const dueDateStyle = {
    fontSize: '14px',
    color: '#94a3b8',
    marginBottom: '10px',
  };

  const statusStyle = (status) => ({
    fontSize: '14px',
    fontWeight: 'bold',
    color: status === 'Pending' ? '#f97316' : '#16a34a',
  });

  const buttonStyle = {
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#1e3a8a',
    color: '#fff',
    cursor: 'pointer',
    fontWeight: 'bold',
  };

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>Assignments</div>
      <ul style={assignmentListStyle}>
        {assignments.map((assignment) => (
          <li key={assignment.id} style={assignmentItemStyle}>
            <div style={assignmentInfoStyle}>
              <div style={titleStyle}>{assignment.title}</div>
              <div style={descriptionStyle}>{assignment.description}</div>
              <div style={dueDateStyle}>Due: {assignment.dueDate}</div>
              <div style={statusStyle(assignment.status)}>Status: {assignment.status}</div>
            </div>
            <button style={buttonStyle}>
              {assignment.status === 'Pending' ? 'Submit' : 'View'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Assignments;
