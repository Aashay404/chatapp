import React, { useState, useContext } from "react";
import { Mail, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

const handleLogin = async () => {
  if (!email || !password) {
    alert("Please enter email and password");
    return;
  }

  try {
    const { data } = await axios.post(
      "http://localhost:5000/api/auth/login",
      { email, password }
    );

    login(data); // store user + token
    navigate("/home");

  } catch (error) {
    alert(error.response?.data?.message || "Login failed");
  }
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#1e1b4b] relative overflow-hidden">

      <div className="absolute w-72 h-72 bg-purple-600 rounded-full blur-3xl opacity-20 top-[-50px] left-[-50px]"></div>
      <div className="absolute w-72 h-72 bg-blue-600 rounded-full blur-3xl opacity-20 bottom-[-50px] right-[-50px]"></div>

      <div className="w-[380px] p-8 rounded-3xl backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl relative z-10">

        <h2 className="text-3xl font-semibold text-white text-center mb-8">
          ChatApp
        </h2>

        <div className="relative mb-6">
          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-full bg-white/10 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="relative mb-8">
          <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-full bg-white/10 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          onClick={handleLogin}
          className="w-full py-3 rounded-full bg-blue-500 hover:bg-blue-600 text-white font-medium transition"
        >
          Sign In
        </button>

        <div className="text-center text-sm text-gray-300 mt-5">
          Don’t have an account?{" "}
          <span
            onClick={() => navigate("/register")}
            className="text-blue-400 cursor-pointer"
          >
            Register
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;