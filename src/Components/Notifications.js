import React from 'react';

const Notifications = () => {
  const notifications = [
    {
      id: 1,
      title: 'New Assignment Posted',
      description: 'The assignment for "React.js Essentials" is now available.',
      timestamp: '2 hours ago',
      category: 'Assignment',
      icon: '📝',
    },
    {
      id: 2,
      title: 'Quiz Reminder',
      description: 'Reminder: The quiz for "Machine Learning Basics" is due tomorrow.',
      timestamp: '4 hours ago',
      category: 'Reminder',
      icon: '⏰',
    },
    {
      id: 3,
      title: 'Course Updated',
      description: '"Node.js Fundamentals" has new lecture videos available.',
      timestamp: '1 day ago',
      category: 'Course Update',
      icon: '📚',
    },
    {
      id: 4,
      title: 'Achievement Unlocked!',
      description: 'You’ve completed the "HTML & CSS for Beginners" course. Great job!',
      timestamp: '3 days ago',
      category: 'Achievement',
      icon: '🏆',
    },
  ];

  const categoryColors = {
    Assignment: '#fef3c7', // Light Yellow
    Reminder: '#fef2c7', // Light Orange
    'Course Update': '#e0f2fe', // Light Blue
    Achievement: '#d1fae5', // Light Green
  };

  const containerStyle = {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f4f8fc',
    color: '#333',
  };

  const headerStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#1e3a8a',
  };

  const notificationListStyle = {
    listStyleType: 'none',
    padding: 0,
  };

  const notificationItemStyle = {
    display: 'flex',
    alignItems: 'flex-start',
    padding: '15px',
    marginBottom: '10px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s, box-shadow 0.3s',
  };

  const iconStyle = {
    fontSize: '24px',
    marginRight: '15px',
    color: '#1e3a8a',
  };

  const textContainerStyle = {
    flex: 1,
  };

  const titleStyle = {
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '5px',
  };

  const descriptionStyle = {
    fontSize: '14px',
    color: '#64748b',
    marginBottom: '5px',
  };

  const timestampStyle = {
    fontSize: '12px',
    color: '#94a3b8',
  };

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>Notifications</div>
      <ul style={notificationListStyle}>
        {notifications.map((notification) => (
          <li
            key={notification.id}
            style={{
              ...notificationItemStyle,
              backgroundColor: categoryColors[notification.category] || '#ffffff',
            }}
          >
            <div style={iconStyle}>{notification.icon}</div>
            <div style={textContainerStyle}>
              <div style={titleStyle}>{notification.title}</div>
              <div style={descriptionStyle}>{notification.description}</div>
              <div style={timestampStyle}>{notification.timestamp}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
