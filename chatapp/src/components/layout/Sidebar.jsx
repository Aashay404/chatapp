import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import socket from "../../socket/socket";

const Sidebar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    socket.on("update_users", (onlineUsers) => {
      setUsers(onlineUsers);
    });

    return () => socket.off("update_users");
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="w-[280px] backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-5 flex flex-col">

      <h2 className="text-white text-xl font-semibold mb-6">
        ChatApp
      </h2>

      <div className="flex flex-col gap-3 flex-1 overflow-y-auto">
        {users
          .filter((u) => u.name !== user?.name)
          .map((person, index) => (
            <Link
              key={index}
              to={`/chat/${person.name}`}
              className="px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white transition duration-200"
            >
              {person.name}
            </Link>
          ))}
      </div>

      <button
        onClick={handleLogout}
        className="mt-4 py-2 rounded-full bg-red-500/80 hover:bg-red-600 text-white transition duration-300"
      >
        Logout
      </button>
    </div>
  );
};

export default Sidebar;