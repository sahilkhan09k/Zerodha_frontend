// AuthProvider.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setUser, logout, setLoading } from "./store/slices/authSlice";

function AuthProvider({ children }) {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        dispatch(setLoading(true));
        // Step 1: try current user
        const res = await axios.get("http://localhost:5000/api/v1/user/current", {
          withCredentials: true,
        });
        dispatch(setUser(res.data.data));
        localStorage.setItem("userData", res.data.message);
        window.open("http://localhost:3001", "_blank");
      } catch (err) {
        // Step 2: try refresh if access token expired
        try {
          await axios.get("http://localhost:5000/api/v1/user/refreshAccessToken", {
            withCredentials: true,
          });
          const res = await axios.get("http://localhost:5000/api/v1/user/current", {
            withCredentials: true,
          });
          dispatch(setUser(res.data.data));
          localStorage.setItem("userData", res.data.message);
          window.open("http://localhost:3001", "_blank");
        } catch (err2) {
          dispatch(logout());
        }
      }
    };

    checkAuth();
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;

  return children;
}

export default AuthProvider;
