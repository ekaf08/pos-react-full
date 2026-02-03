import axios from "axios";

/**
 * =====================================
 * AXIOS INSTANCE
 * Base URL ke Laravel API
 * =====================================
 */
const api = axios.create({
  baseURL: "http://localhost/react-try/pos-backend/public/api",
  headers: {
    Accept: "application/json",
  },
});

/**
 * =====================================
 * INTERCEPTOR
 * - Menyisipkan token ke setiap request
 * =====================================
 */
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;
