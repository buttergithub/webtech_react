import axios from 'axios';

const api = axios.create({
  baseURL: '/api',  // Changed to use the Vite proxy
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true  // Important for handling cookies/sessions
});

// Token interceptor - great implementation!
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Response interceptor with authentication handling - excellent!
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
