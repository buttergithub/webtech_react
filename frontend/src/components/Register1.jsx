// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import image from '../assets/assets/image/register.jpg'; // Update the path as needed

const Register1 = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    role: '',
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    try {
      const response = await axios.post('http://localhost:8082/api/register', formData);
      if (response.status === 200) {
        setFormData({ username: '', email: '', password: '', role: '' });
        setSuccessMessage('Registration successful!');
        setTimeout(() => {
          navigate('/login');
        }, 2000); // Redirects after 2 seconds
      }
    } catch (error) {
      setErrorMessage(error.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.7)', // Semi-transparent white
          padding: '2rem',
          borderRadius: '15px',
          width: '100%',
          maxWidth: '400px',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)', // Light shadow
          backdropFilter: 'blur(10px)', // Blur effect
        }}
      >
        <h1 style={{ textAlign: 'center', marginBottom: '1rem', color: '#003366' }}>Register</h1>
        <form onSubmit={handleRegister}>
          <div style={{ marginBottom: '1rem' }}>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '15px',
                border: '2px solid rgba(255, 255, 255, 0.3)',
                borderRadius: '50px', // Oval shape
                background: 'rgba(255, 255, 255, 0.8)', // Slight transparency
                fontSize: '16px',
                transition: 'all 0.3s ease',
              }}
            />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '15px',
                border: '2px solid rgba(255, 255, 255, 0.3)',
                borderRadius: '50px', // Oval shape
                background: 'rgba(255, 255, 255, 0.8)',
                fontSize: '16px',
                transition: 'all 0.3s ease',
              }}
            />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '15px',
                border: '2px solid rgba(255, 255, 255, 0.3)',
                borderRadius: '50px', // Oval shape
                background: 'rgba(255, 255, 255, 0.8)',
                fontSize: '16px',
                transition: 'all 0.3s ease',
              }}
            />
          </div>
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '15px',
              border: '2px solid rgba(255, 255, 255, 0.3)',
              borderRadius: '50px', // Oval shape
              background: 'rgba(255, 255, 255, 0.8)',
              fontSize: '16px',
              appearance: 'none', // Removes default browser styling
              WebkitAppearance: 'none', // For Safari
              MozAppearance: 'none', // For Firefox
              transition: 'all 0.3s ease',
              marginBottom: '1rem',
              textAlign: 'center',
              color: '#333', // Text color for better readability
            }}
          >
            <option value="" disabled hidden>
              Select Role
            </option>
            <option value="ROLE_USER">Student</option>
            <option value="ROLE_TEACHER">Teacher</option>
          </select>

          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
          {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '15px',
              backgroundColor: '#6a11cb',
              color: '#fff',
              border: 'none',
              borderRadius: '50px', // Oval shape
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
          >
            Register
          </button>
        </form>
        <div style={{ marginTop: '1rem', textAlign: 'center' }}>
          <Link to="/login" style={{ color: '#6a11cb', textDecoration: 'none' }}>
            Already have an account? Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register1;
