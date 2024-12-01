/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const StudentDashboard = () => {
  const [notifications, setNotifications] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchUserNotifications();
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const dashboardData = await axios.get('/api/studentDashboard');
      // Handle dashboard data
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    }
  };

  const fetchUserNotifications = async () => {
    try {
      const response = await axios.get('/api/notifications/user/unread');
      if (Array.isArray(response.data)) {
        setNotifications(response.data);
        await markAllNotificationsAsRead();
      } else {
        setNotifications([]);
      }
    } catch (error) {
      console.log('Error fetching notifications:', error);
      setNotifications([]);
    }
  };

  const markAllNotificationsAsRead = async () => {
    try {
      await axios.put('/api/notifications/user/mark-all-as-read');
    } catch (error) {
      console.log('Error marking notifications as read:', error);
    }
  };
  const handleLogout = () => {
    localStorage.removeItem('token');
    sessionStorage.clear();
    navigate('/login');
  };

  const dashboardStyle = {
    background: 'linear-gradient(135deg, #001f3f, #0074d9)',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    animation: 'fadeIn 1s ease'
  };

  const contentStyle = {
    backgroundColor: '#003366',
    padding: '2rem',
    maxWidth: '800px',
    width: '100%',
    borderRadius: '10px',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)',
    textAlign: 'center',
    color: '#e0f7fa'
  };

  return (
    <div style={dashboardStyle}>
      <div style={contentStyle}>
        <h1>Student Dashboard ........</h1>
        <p className="welcome-message">
          Your personal hub for managing quizzes, tracking performance, and enhancing skills.
        </p>

        <div className="quiz-summary">
          <h2>Available Quizzes</h2>
          <p>Explore quizzes on various subjects and start practicing to improve your knowledge.</p>
          <Link to="/quizzes/current" className="btn">Start a Quiz</Link>
          <Link to="/quizzes/upcoming" className="btn">Upcoming Quizzes</Link>
        </div>

        <div className="quiz-summary">
          <h2>Your Recent Quiz Performance</h2>
          <p>Check how you performed in the latest quizzes. Track scores and aim to improve!</p>
          <Link to="/quizzes/history" className="btn">View Quiz History</Link>
        </div>

        <div className="quiz-summary">
          <h2>Resources & Study Materials</h2>
          <p>Access resources to help you prepare better for upcoming quizzes.</p>
          <Link to="/resources" className="btn">Go to Resources</Link>
        </div>

        <div id="user-notifications">
          <h3>Notifications <span>{notifications.length}</span></h3>
          <div>
            {notifications && notifications.length > 0 ? (
              notifications.map((notification, index) => (
                <div key={index} className="notification-item">
                  <strong>{notification.title}</strong>
                  <p>{notification.message}</p>
                </div>
              ))
            ) : (
              <p>No new notifications</p>
            )}
          </div>
        </div>

        <button onClick={handleLogout}>
          Logout
        </button>
      </div>

      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }

          @keyframes slideIn {
            from { transform: translateX(-20px); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
          }

          .btn {
            display: inline-block;
            margin: 0.5rem;
            padding: 10px 20px;
            background-color: #0074d9;
            color: #fff;
            text-decoration: none;
            border-radius: 5px;
            transition: background-color 0.3s, transform 0.3s;
          }

          .btn:hover {
            background-color: #39ace7;
            transform: scale(1.05);
          }

          .notification-item {
            padding: 0.5rem 0;
            border-bottom: 1px solid #87ceeb;
            animation: slideIn 0.5s ease forwards;
          }
        `}
      </style>
    </div>
  );
};

export default StudentDashboard;
