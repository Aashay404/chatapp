import React, { useEffect, useState, useContext } from "react";
import MessageBubble from "../chat/MessageBubble";
import MessageInput from "../chat/MessageInput";
import socket from "../../socket/socket";
import { AuthContext } from "../../context/AuthContext";

const ChatWindow = () => {
  const { user } = useContext(AuthContext); // ✅ inside component

  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const messageData = {
      text: input,
      time: new Date().toLocaleTimeString(),
      sender: user?.name,
    };

    socket.emit("send_message", messageData);

    setMessages((prev) => [
      ...prev,
      { ...messageData, own: true },
    ]);

    setInput("");
  };

  useEffect(() => {
    if (user?.name) {
      socket.emit("user_online", user.name);
    }

    socket.on("receive_message", (data) => {
      setMessages((prev) => [
        ...prev,
        { ...data, own: false },
      ]);
    });

    return () => {
      socket.off("receive_message");
    };
  }, [user]);

  return (
    <div className="flex-1 backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-6 flex flex-col">

      <div className="text-white text-lg font-semibold mb-4 border-b border-white/20 pb-3">
        Chat Room
      </div>

      <div className="flex-1 overflow-y-auto flex flex-col gap-4 pr-2">
        {messages.map((msg, index) => (
          <MessageBubble
            key={index}
            text={msg.text}
            isOwn={msg.own}
          />
        ))}
      </div>

      <MessageInput
        input={input}
        setInput={setInput}
        handleSend={handleSend}
      />
    </div>
  );
};

export default ChatWindow;