// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import api from './api';
import image from '../assets/assets/image/student1.jpg';

// Styled Components
const LoginContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(rgba(0, 31, 63, 0.7), rgba(0, 31, 63, 0.7)),
    url(${image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const LoginForm = styled.form`
  background: rgba(255, 255, 255, 0.2); /* Transparent background */
  padding: 40px;
  border-radius: 15px;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3); /* Light shadow */
  backdrop-filter: blur(10px); /* Blur effect */
  text-align: center;
`;

const Title = styled.h1`
  color: white;
  margin-bottom: 30px;
  font-size: 28px;
  font-weight: 700;
`;

const InputGroup = styled.div`
  margin-bottom: 20px;
  position: relative;
`;

const Input = styled.input`
  width: 100%;
  padding: 15px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50px; /* Oval shape */
  font-size: 16px;
  color: #333;
  background: rgba(255, 255, 255, 0.7); /* Semi-transparent input fields */
  transition: all 0.3s ease;

  &:focus {
    border-color: #a2d5f2;
    box-shadow: 0 0 5px rgba(162, 213, 242, 0.5); /* Subtle glow effect */
    outline: none;
  }
`;

const LoginButton = styled.button`
  width: 100%;
  padding: 15px;
  background: #003366;
  color: white;
  border: none;
  border-radius: 50px; /* Oval shape */
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 20px;

  &:hover {
    background: #004080;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 51, 102, 0.2);
  }
`;


const LinkContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  a {
    color: #a2d5f2;
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
      color: white;
      text-decoration: underline;
    }
  }
`;

const Message = styled.p`
  padding: 10px;
  border-radius: 6px;
  margin: 10px 0;
  font-size: 14px;

  ${(props) =>
    props.$isError &&
    `background: rgba(220, 53, 69, 0.1); color: #ff6b6b;`}

  ${(props) =>
    props.$isSuccess &&
    `background: rgba(40, 167, 69, 0.1); color: #51cf66;`}
`;

const Login1 = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const response = await api.post('/api/login', {
        username: formData.username,
        password: formData.password,
      });

      const role = response.data;

      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('role', role);
      localStorage.setItem('username', formData.username);

      setSuccess('Login successful! Redirecting...');

      switch (role) {
        case 'ROLE_USER':
          navigate('/studentDashboard');
          break;
        case 'ROLE_ADMIN':
          navigate('/admin');
          break;
        case 'ROLE_TEACHER':
          navigate('/teacherDashboard');
          break;
        default:
          navigate('/');
      }
    } catch (error) {
      const errorMessage = error.response?.data || 'Invalid username or password';
      setError(`Login failed: ${errorMessage}`);
    }
  };

  return (
    <LoginContainer>
      <LoginForm onSubmit={handleSubmit}>
        <Title>Welcome...</Title>

        <InputGroup>
          <Input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </InputGroup>

        <InputGroup>
          <Input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </InputGroup>

        <LoginButton type="submit">Login</LoginButton>

        {error && <Message $isError>{error}</Message>}
        {success && <Message $isSuccess>{success}</Message>}

        <LinkContainer>
          <Link to="/register">No account? Register here</Link>
          <Link to="/forgotPassword">Forgot Password?</Link>
        </LinkContainer>
      </LoginForm>
    </LoginContainer>
  );
};

export default Login1;
