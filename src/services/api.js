import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const bookingService = {
  createBooking: (data) => api.post('/bookings', data),
  getBookings: () => api.get('/bookings'),
  cancelBooking: (id) => api.delete(`/bookings/${id}`)
};

export const userService = {
  updateProfile: (data) => api.put('/users/profile', data),
  getProfile: () => api.get('/users/profile')
};

export default api; 