import React from "react";

const MessageBubble = ({ text, isOwn }) => {
  return (
    <div
      className={`max-w-sm px-4 py-3 rounded-2xl text-white ${
        isOwn
          ? "bg-blue-500/80 self-end"
          : "bg-white/10 self-start"
      }`}
    >
      {text}
    </div>
  );
};

export default MessageBubble;