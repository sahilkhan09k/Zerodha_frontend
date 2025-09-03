import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

function SignUp() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [avatar, setAvatar] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [avatar, setAvatar] = useState(null);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!userName.trim() || !email.trim() || !password.trim() || !avatar) {
      toast.error("All fields are required");
      setLoading(false);
      return;
    }

    try {
      const formData = new FormData();
      formData.append("userName", userName);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("avatar", avatar); // 👈 actual file

      const response = await axios.post(
        "http://localhost:5000/api/v1/user/register",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data", // 👈 important
          },
        }
      );

      toast.success(response.data.data);
      navigate("/login");
    } catch (error) {
      toast.error(
        error.response?.data?.message || "An error occurred during sign up"
      );
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
          <h2>Come join us!</h2>
          <p className="mt-3 text-center fs-5">
            We are so excited to have you here. If you haven't already, create
            an account to get access to exclusive features and enjoy trading!!
          </p>
          <button
            type="button"
            className="btn btn-info fs-5 mt-5 p-3"
            onClick={() => navigate("/login")}
          >
            Already have an account? Log in
          </button>
        </div>
        <div
          style={{ paddingLeft: "100px", paddingRight: "100px" }}
          className="col mt-5 d-flex flex-column align-items-center"
        >
          <h1 className="mb-5">Sign Up</h1>
          <form className="mt-5 text-center" onSubmit={handleSubmit}>
            <div>
              <input
                style={{ height: "65px", width: "500px" }}
                type="text"
                placeholder="Username"
                className="form-control mb-4"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
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

              <div className="d-flex align-items-center">
                {" "}
                <label>Upload Avatar</label>{" "}
                <input
                  type="file"
                  className="form-control"
                  onChange={(e) => setAvatar(e.target.files[0])}
                  style={{ width: "250px", marginLeft: "50px" }}
                />{" "}
              </div>
            </div>
            <button
              type="submit"
              className="btn btn-primary mt-4 p-2 fs-5"
              disabled={loading}
            >
              {loading ? "Signing Up..." : "Sign Up"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
