import axios from 'axios';

const api = axios.create({
  baseURL: '/api',  // This will work for both development and production
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
  // Remove any duplicate /api in the URL if it exists
  config.url = config.url.replace(/\/api\/api\//, '/api/');
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
