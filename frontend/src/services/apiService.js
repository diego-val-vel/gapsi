import axios from 'axios';

const baseURL = 'http://localhost:3001/api/';

const apiService = axios.create({
  baseURL
});

export default apiService;
