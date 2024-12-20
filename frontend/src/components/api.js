import axios from 'axios';

const BACKEND_URL = 'https://online-quiz-app-backend-v5hw.onrender.com';

const api = axios.create({
  baseURL: BACKEND_URL,  // Direct connection to backend
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true
});

// Token interceptor
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Response interceptor with authentication handling
api.interceptors.response.use(
  response => response,
  error => {
    if (error.response?.status === 401 && !window.location.pathname.includes('/login')) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default api;
