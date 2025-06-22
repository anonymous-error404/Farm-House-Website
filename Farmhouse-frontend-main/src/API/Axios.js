import axios from 'axios';

const API = "http://127.0.0.1:8000/NirmalFarms/api";

const axiosInstance = axios.create({
  baseURL: API,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  }
});

export default axiosInstance;