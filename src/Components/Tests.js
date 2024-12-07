import React, { useState } from 'react';

const Tests = () => {
  const [tests, setTests] = useState([
    {
      id: 1,
      title: 'React Basics Quiz',
      subject: 'React.js',
      duration: '30 mins',
      deadline: '2024-12-10',
      status: 'Available',
    },
    {
      id: 2,
      title: 'Node.js Assessment',
      subject: 'Node.js',
      duration: '45 mins',
      deadline: '2024-12-12',
      status: 'Completed',
    },
    {
      id: 3,
      title: 'MongoDB Basics Test',
      subject: 'MongoDB',
      duration: '60 mins',
      deadline: '2024-12-15',
      status: 'Available',
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

  const testListStyle = {
    listStyleType: 'none',
    padding: 0,
  };

  const testItemStyle = {
    backgroundColor: '#ffffff',
    padding: '15px',
    borderRadius: '10px',
    marginBottom: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const testInfoStyle = {
    flex: 1,
    marginRight: '10px',
  };

  const titleStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '5px',
    color: '#333',
  };

  const detailsStyle = {
    fontSize: '14px',
    color: '#64748b',
    marginBottom: '10px',
  };

  const statusStyle = (status) => ({
    fontSize: '14px',
    fontWeight: 'bold',
    color: status === 'Available' ? '#16a34a' : '#2563eb',
    marginBottom: '10px',
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
      <div style={headerStyle}>Tests</div>
      <ul style={testListStyle}>
        {tests.map((test) => (
          <li key={test.id} style={testItemStyle}>
            <div style={testInfoStyle}>
              <div style={titleStyle}>{test.title}</div>
              <div style={detailsStyle}>
                Subject: {test.subject} | Duration: {test.duration} | Deadline: {test.deadline}
              </div>
              <div style={statusStyle(test.status)}>Status: {test.status}</div>
            </div>
            <button style={buttonStyle}>
              {test.status === 'Available' ? 'Start' : 'View Results'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tests;
