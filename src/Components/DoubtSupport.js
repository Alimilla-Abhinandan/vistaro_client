import React, { useState } from 'react';

const DoubtSupport = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      const userMessage = { sender: 'user', text: input };
      const aiMessage = {
        sender: 'ai',
        text: `I'm here to help! You asked: "${input}". Here's a possible answer: ...`, // Placeholder response
      };
      setMessages([...messages, userMessage, aiMessage]);
      setInput('');
    }
  };

  const handleInputChange = (e) => setInput(e.target.value);

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleSend();
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '80vh',
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#f9fafb',
  };

  const chatBoxStyle = {
    flex: 1,
    overflowY: 'auto',
    padding: '10px',
    marginBottom: '10px',
    border: '1px solid #e0e6ed',
    borderRadius: '8px',
    backgroundColor: '#ffffff',
  };

  const messageStyle = {
    marginBottom: '10px',
    display: 'flex',
    alignItems: 'flex-start',
  };

  const userMessageStyle = {
    alignSelf: 'flex-end',
    backgroundColor: '#e0f7fa',
    padding: '10px',
    borderRadius: '10px',
    marginLeft: 'auto',
    maxWidth: '70%',
  };

  const aiMessageStyle = {
    alignSelf: 'flex-start',
    backgroundColor: '#f0f4ff',
    padding: '10px',
    borderRadius: '10px',
    marginRight: 'auto',
    maxWidth: '70%',
  };

  const inputBoxStyle = {
    display: 'flex',
    alignItems: 'center',
    borderTop: '1px solid #e0e6ed',
    padding: '10px',
  };

  const inputStyle = {
    flex: 1,
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    outline: 'none',
  };

  const buttonStyle = {
    marginLeft: '10px',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#1e3a8a',
    color: '#fff',
    cursor: 'pointer',
    fontWeight: 'bold',
  };

  const buttonHoverStyle = {
    backgroundColor: '#153e75',
  };

  return (
    <div style={containerStyle}>
      <div style={chatBoxStyle}>
        {messages.map((message, index) => (
          <div
            key={index}
            style={{
              ...messageStyle,
              ...(message.sender === 'user' ? userMessageStyle : aiMessageStyle),
            }}
          >
            {message.text}
          </div>
        ))}
      </div>
      <div style={inputBoxStyle}>
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          onKeyDown={handleKeyPress}
          placeholder="Type your doubt here..."
          style={inputStyle}
        />
        <button
          onClick={handleSend}
          style={buttonStyle}
          onMouseOver={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
          onMouseOut={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default DoubtSupport;
