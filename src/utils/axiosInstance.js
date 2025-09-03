// src/utils/axiosInstance.js
import axios from "axios";
import { store } from "../store/store";
import { refreshToken } from "../store/slices/authSlice";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8000/api/v1", // your backend base URL
  withCredentials: true,
});

// Interceptor for expired token
axiosInstance.interceptors.response.use(
  (res) => res,
  async (error) => {
    const originalRequest = error.config;

    // If 401, try refresh
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        await store.dispatch(refreshToken());
        return axiosInstance(originalRequest);
      } catch (err) {
        return Promise.reject(err);
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
