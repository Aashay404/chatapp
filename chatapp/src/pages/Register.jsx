import React, { useState } from "react";
import { Mail, Lock, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

 const handleRegister = async () => {
  if (!name || !email || !password || !confirmPassword) {
    alert("Please fill all fields");
    return;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  try {
    const { data } = await axios.post(
      "http://localhost:5000/api/auth/register",
      { name, email, password }
    );

    alert("Registration successful!");
    navigate("/");

  } catch (error) {
    alert(error.response?.data?.message || "Registration failed");
  }
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#1e1b4b] relative overflow-hidden">

      {/* Glow Effects */}
      <div className="absolute w-72 h-72 bg-purple-600 rounded-full blur-3xl opacity-20 top-[-50px] left-[-50px]"></div>
      <div className="absolute w-72 h-72 bg-blue-600 rounded-full blur-3xl opacity-20 bottom-[-50px] right-[-50px]"></div>

      {/* Glass Card */}
      <div className="w-[400px] p-8 rounded-3xl backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl relative z-10">

        <h2 className="text-3xl font-semibold text-white text-center mb-8 tracking-wide">
          Create Account
        </h2>

        {/* Name */}
        <div className="relative mb-5">
          <User
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300"
            size={18}
          />
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-full bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
          />
        </div>

        {/* Email */}
        <div className="relative mb-5">
          <Mail
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300"
            size={18}
          />
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-full bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
          />
        </div>

        {/* Password */}
        <div className="relative mb-5">
          <Lock
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300"
            size={18}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-full bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
          />
        </div>

        {/* Confirm Password */}
        <div className="relative mb-7">
          <Lock
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300"
            size={18}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-full bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
          />
        </div>

        {/* Register Button */}
        <button
          onClick={handleRegister}
          className="w-full py-3 rounded-full bg-blue-500 hover:bg-blue-600 text-white font-medium transition duration-300 shadow-lg"
        >
          Register
        </button>

        {/* Footer */}
        <div className="text-center text-sm text-gray-300 mt-6">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/")}
            className="text-blue-400 hover:text-white cursor-pointer transition"
          >
            Sign In
          </span>
        </div>
      </div>
    </div>
  );
};

export default Register;