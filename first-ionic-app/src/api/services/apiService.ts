import axios from "axios";

const apiService = axios.create({
  // baseURL: process.env.VITE_REACT_APP_BASE_URL,
  // baseURL: "http://localhost:3000",
  // baseURL: process.env.VITE_REACT_BASE_URL,
  baseURL: import.meta.env.VITE_REACT_BASE_URL,
});

export default apiService;
