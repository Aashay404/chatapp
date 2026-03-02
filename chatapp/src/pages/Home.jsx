import React from "react";
import Sidebar from "../components/layout/Sidebar";
import ChatWindow from "../components/layout/ChatWindow";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#1e1b4b] relative overflow-hidden p-6">

      {/* Glow */}
      <div className="absolute w-72 h-72 bg-purple-600 rounded-full blur-3xl opacity-20 top-[-60px] left-[-60px]"></div>
      <div className="absolute w-72 h-72 bg-blue-600 rounded-full blur-3xl opacity-20 bottom-[-60px] right-[-60px]"></div>

      {/* Layout */}
      <div className="relative z-10 flex h-[90vh] gap-6">
        <Sidebar />        {/* LEFT SIDE */}
        <ChatWindow />     {/* RIGHT SIDE - ONLY ONE */}
      </div>

    </div>
  );
};

export default Home;