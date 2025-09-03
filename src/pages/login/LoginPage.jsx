import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Eye, EyeOff } from "lucide-react";
import { login } from "../../store/slices/authSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const API_URL = process.env.REACT_APP_API_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(
        `${API_URL}/api/v1/users/login`,
        { email, password },
        { withCredentials: true }
      );
      
      dispatch(login(res.data.message));
      localStorage.setItem("userData", res.data.message);
      toast.success("Logged in successfully");
      window.open("https://zerodha-dashboard-gilt.vercel.app/", "_blank");

      // navigate("/dashboard");
    } catch (err) {
      toast.error(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div
          style={{ paddingLeft: "100px", paddingRight: "100px" }}
          className="col bg-primary text-white d-flex flex-column justify-content-center align-items-center mt-5"
        >
          <h2>Welcome Back!</h2>
          <p className="mt-3 text-center fs-5">
            We're glad to see you again. Please log in to access your dashboard
            and continue trading with us!
          </p>
          <button type="button" className="btn btn-info fs-5 mt-5 p-3" onClick={() => navigate("/signup")}>
            Don’t have an account? Sign up
          </button>
        </div>
        <div
          style={{ paddingLeft: "100px", paddingRight: "100px" }}
          className="col mt-5 d-flex flex-column align-items-center"
        >
          <h1 className="mb-5">Log In</h1>
          <form className="mt-5 text-center" onSubmit={handleSubmit}>
            <div>
              <input
                style={{ height: "65px", width: "500px" }}
                type="email"
                placeholder="Email"
                className="form-control mb-4"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="d-flex position-relative">
                <input
                  style={{ height: "65px", width: "500px" }}
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="form-control mb-4"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="eye-btn"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="fs-5" />
                  ) : (
                    <Eye className="fs-5" />
                  )}
                </button>
              </div>
            </div>
            <button
              type="submit"
              className="btn btn-primary mt-4 p-2 fs-5"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Log In"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
