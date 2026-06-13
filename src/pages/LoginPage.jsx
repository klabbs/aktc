import { useState } from "react";
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom";

import { loginUser } from "../api/auth";
import {
  setCredentials,
  setAuthInitialized,
} from "../store/slices/authSlice"

const LoginPage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError("");

      const response = await loginUser(formData)
      const data = response.data;

      // Store JWT
      localStorage.setItem("token", data.token);

      // Optional: Store user info
      /*localStorage.setItem(
        "user",
        JSON.stringify(data.user)
      );*/

      //dispatch to update Redux directly
      dispatch(
        setCredentials({
          user: data.user,
          token: data.token,
        })
      );
      dispatch(setAuthInitialized());
      navigate("/"+data.user?.role);
    } catch (err) {
      setError(
        err?.response?.data?.message ||
          "Login failed"
      );
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="w-96 rounded-xl bg-white p-8 shadow-lg"
      >
        <h2 className="mb-6 text-2xl font-bold">
          Login
        </h2>

        {error && (
          <div className="mb-4 rounded bg-red-100 p-3 text-red-600">
            {error}
          </div>
        )}

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="mb-4 w-full rounded border p-3"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="mb-4 w-full rounded border p-3"
          required
        />

        <button
          type="submit"
          className="w-full rounded bg-blue-600 p-3 text-white"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;