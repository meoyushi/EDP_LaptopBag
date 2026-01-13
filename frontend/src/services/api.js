import axios from 'axios';

const api = axios.create({ baseURL: 'http://localhost:3000/api' });

// Mock data for demo
const mockBagStatus = {
  batteryPercent: 75,
  laptopInside: true,
  location: {
    lat: 37.7749,
    lng: -122.4194,
    address: 'San Francisco, CA'
  },
  user: {
    name: 'John Doe',
    email: 'john.doe@example.com'
  }
};

// Mock API responses
api.get = api.get.bind(api);
const originalGet = api.get;
api.get = (url) => {
  if (url === '/bag/status') {
    return Promise.resolve({ data: mockBagStatus });
  }
  return originalGet(url);
};

export default api;
