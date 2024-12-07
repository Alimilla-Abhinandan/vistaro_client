import React, { useState } from 'react';

const AllCourses = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('All');

  const courses = [
    {
      id: 1,
      title: 'React.js Essentials',
      category: 'Frontend',
      description: 'Learn the fundamentals of React.js and build dynamic UIs.',
    },
    {
      id: 2,
      title: 'Node.js Fundamentals',
      category: 'Backend',
      description: 'Master backend development with Node.js and Express.',
    },
    {
      id: 3,
      title: 'MongoDB Mastery',
      category: 'Database',
      description: 'Dive into MongoDB and learn to handle NoSQL databases.',
    },
    {
      id: 4,
      title: 'Python for Data Science',
      category: 'Data Science',
      description: 'Analyze data effectively with Python and its libraries.',
    },
    {
      id: 5,
      title: 'Machine Learning Basics',
      category: 'AI/ML',
      description: 'Get started with machine learning concepts and tools.',
    },
    {
      id: 6,
      title: 'Cloud Computing with AWS',
      category: 'Cloud',
      description: 'Understand cloud services and deploy on AWS.',
    },
    {
      id: 7,
      title: 'Cybersecurity Fundamentals',
      category: 'Security',
      description: 'Learn to secure systems and protect against cyber threats.',
    },
    {
      id: 8,
      title: 'DevOps with Docker and Kubernetes',
      category: 'DevOps',
      description: 'Automate and deploy applications with DevOps tools.',
    },
    {
      id: 9,
      title: 'HTML & CSS for Beginners',
      category: 'Frontend',
      description: 'Build beautiful websites with HTML5 and CSS3.',
    },
    {
      id: 10,
      title: 'JavaScript Advanced Concepts',
      category: 'Programming',
      description: 'Enhance your JavaScript skills with advanced concepts.',
    },
  ];

  const handleSearchChange = (e) => setSearchTerm(e.target.value.toLowerCase());
  const handleFilterChange = (e) => setFilter(e.target.value);

  const filteredCourses = courses.filter((course) => {
    return (
      (filter === 'All' || course.category === filter) &&
      course.title.toLowerCase().includes(searchTerm)
    );
  });

  const containerStyle = {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f4f8fc',
    color: '#333',
  };

  const searchBarStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
  };

  const inputStyle = {
    padding: '10px',
    width: '70%',
    border: '1px solid #ddd',
    borderRadius: '5px',
    outline: 'none',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };

  const selectStyle = {
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    outline: 'none',
    backgroundColor: '#ffffff',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };

  const cardContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '20px',
  };

  const cardStyle = {
    border: '1px solid #e0e6ed',
    borderRadius: '12px',
    padding: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    backgroundColor: '#ffffff',
    transition: 'transform 0.3s, box-shadow 0.3s',
  };

  const cardTitleStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#1e3a8a', // Professional blue
    marginBottom: '10px',
  };

  const cardDescriptionStyle = {
    fontSize: '14px',
    color: '#64748b',
    marginBottom: '15px',
  };

  const cardButtonStyle = {
    padding: '10px 15px',
    backgroundColor: '#1e3a8a',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    transition: 'background-color 0.3s',
  };

  const cardButtonHoverStyle = {
    backgroundColor: '#153e75',
  };

  return (
    <div style={containerStyle}>
      <div style={searchBarStyle}>
        <input
          type="text"
          placeholder="Search courses..."
          value={searchTerm}
          onChange={handleSearchChange}
          style={inputStyle}
        />
        <select value={filter} onChange={handleFilterChange} style={selectStyle}>
          <option value="All">All Categories</option>
          <option value="Frontend">Frontend</option>
          <option value="Backend">Backend</option>
          <option value="Database">Database</option>
          <option value="Data Science">Data Science</option>
          <option value="AI/ML">AI/ML</option>
          <option value="Cloud">Cloud</option>
          <option value="Security">Security</option>
          <option value="DevOps">DevOps</option>
          <option value="Programming">Programming</option>
        </select>
      </div>
      <div style={cardContainerStyle}>
        {filteredCourses.map((course) => (
          <div
            key={course.id}
            style={{
              ...cardStyle,
            }}
          >
            <div style={cardTitleStyle}>{course.title}</div>
            <div style={cardDescriptionStyle}>{course.description}</div>
            <button
              style={cardButtonStyle}
              onMouseOver={(e) =>
                (e.target.style.backgroundColor = cardButtonHoverStyle.backgroundColor)
              }
              onMouseOut={(e) =>
                (e.target.style.backgroundColor = cardButtonStyle.backgroundColor)
              }
            >
              Explore
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllCourses;
