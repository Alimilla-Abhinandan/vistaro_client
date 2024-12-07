import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import SignIn from '../Components/SignIn'; 
import SignUp from '../Components/SignUp'; 
import ForgotPassword from '../Components/ForgotPassword';

const LoginRouting = () => {
  

  return (
    <Routes>
      {/* Redirect root path to SignIn */}
      <Route path="/" element={<Navigate to="/signin" replace />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
    </Routes>
  );
};

export default LoginRouting;