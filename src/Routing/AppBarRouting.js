import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Profile from '../Components/Profile';
import MyCourses from '../Components/MyCourses';
import AllCourses from '../Components/AllCourses';
import EBooks from '../Components/EBooks';
import Notifications from '../Components/Notifications';
import DoubtSupport from '../Components/DoubtSupport';
import Assignments from '../Components/Assignments';
import Tests from '../Components/Tests';
import Settings from '../Components/Settings';

const AppBarRouting = () => {
  return (
    <Routes>
      <Route path="profile" element={<Profile />} />
      <Route path="my-courses" element={<MyCourses />} />
      <Route path="all-courses" element={<AllCourses />} />
      <Route path="ebooks" element={<EBooks />} />
      <Route path="notifications" element={<Notifications />} />
      <Route path="doubt-support" element={<DoubtSupport />} />
      <Route path="assignments" element={<Assignments />} />
      <Route path="tests" element={<Tests />} />
      <Route path="settings" element={<Settings />} />
      <Route path="*" element={<Navigate replace to="all-courses" />} />
    </Routes>
  );
};

export default AppBarRouting;
