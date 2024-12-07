import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ResponsiveAppBar from './Components/ResponsiveAppBar';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import ForgotPassword from './Components/ForgotPassword';
import Dashboard from './Components/Dashboard';
import Profile from './Components/Profile';
import MyCourses from './Components/MyCourses';
import AllCourses from './Components/AllCourses';
import EBooks from './Components/EBooks';
import Notifications from './Components/Notifications';
import DoubtSupport from './Components/DoubtSupport';
import Assignments from './Components/Assignments';
import Tests from './Components/Tests';
import Settings from './Components/Settings';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check authentication on app load
    const token = localStorage.getItem('token');

    const verifyToken = async () => {
      if (token) {
        try {
          // Token verification endpoint
          const response = await axios.get('http://vistaro-server.onrender.com/api/auth/signin', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          if (response.data.valid) {
            setIsLoggedIn(true);
          } else {
            localStorage.removeItem('token');
            localStorage.removeItem('user');
          }
        } catch (error) {
          localStorage.removeItem('token');
          localStorage.removeItem('user');
        }
      }
      setIsLoading(false);
    };

    verifyToken();
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setIsLoggedIn(false);
  };

  if (isLoading) {
    return <div>Loading...</div>; // You can replace this with a spinner or loading screen
  }

  return (
    <Router>
      {/* Render the AppBar only when logged in */}
      {isLoggedIn && <ResponsiveAppBar handleLogout={handleLogout} />}

      <Routes>
        {/* Authentication Routes */}
        <Route 
          path="/signin" 
          element={!isLoggedIn ? <SignIn handleLogin={handleLogin} /> : <Navigate to="/dashboard" />} 
        />
        <Route 
          path="/signup" 
          element={!isLoggedIn ? <SignUp handleLogin={handleLogin} /> : <Navigate to="/dashboard" />} 
        />
        <Route 
          path="/forgot-password" 
          element={!isLoggedIn ? <ForgotPassword /> : <Navigate to="/dashboard" />} 
        />

        {/* Protected Routes */}
        {isLoggedIn ? (
          <>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/my-courses" element={<MyCourses />} />
            <Route path="/all-courses" element={<AllCourses />} />
            <Route path="/ebooks" element={<EBooks />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/doubt-support" element={<DoubtSupport />} />
            <Route path="/assignments" element={<Assignments />} />
            <Route path="/tests" element={<Tests />} />
            <Route path="/settings" element={<Settings />} />
          </>
        ) : (
          <Route path="*" element={<Navigate to="/signin" />} />
        )}

        {/* Default Route */}
        <Route 
          path="/" 
          element={isLoggedIn ? <Navigate to="/dashboard" /> : <Navigate to="/signin" />} 
        />
      </Routes>
    </Router>
  );
}

export default App;
