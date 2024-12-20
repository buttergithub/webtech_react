// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/i18n';

// Auth Pages
import Login1 from './components/Login1';
import Register1 from './components/Register1';
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPassword';

// Dashboard Pages
import StudentDashboard from './components/StudentDashboard';
import TeacherDashboard from './components/TeacherDashboard';
import AdminDashboard from './components/AdminDashboard';

// Admin Features
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';
import SearchUser from './components/SearchUser';
import UserList from './components/UserList';
import DownloadUsers from './components/DownloadUsers';
import UploadUsers from './components/UploadUsers';

// Other Components
import Homepage1 from './components/Homepage1';
import FileUpload from './components/FileUpload';

function App() {
  return (
    <Router future={{ 
      v7_startTransition: true,
      v7_relativeSplatPath: true 
    }}>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Homepage1 />} />
        <Route path="/login" element={<Login1 />} />
        <Route path="/register" element={<Register1 />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/resetPassword/:token" element={<ResetPassword />} />

        {/* Dashboard Routes */}
        <Route path="/studentDashboard" element={<StudentDashboard />} />
        <Route path="/teacherDashboard" element={<TeacherDashboard />} />

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/Add" element={<AddUser />} />
        <Route path="/admin/users/:id" element={<EditUser />} />
        <Route path="/admin/search/results" element={<SearchUser />} />
        <Route path="/admin/users" element={<UserList />} />
        <Route path="/admin/download/users" element={<DownloadUsers />} />
        <Route path="/admin/upload/users" element={<UploadUsers />} />

        {/* File Management */}
        <Route path="/files/upload" element={<FileUpload />} />
      </Routes>
    </Router>
  );
}

export default App;
