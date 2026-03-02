import React from "react";
import { Send } from "lucide-react";

const MessageInput = ({ input, setInput, handleSend }) => {
  return (
    <div className="mt-4 flex items-center gap-3">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSend()}
        placeholder="Type a message..."
        className="flex-1 px-4 py-3 rounded-full bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button
        onClick={handleSend}
        className="p-3 rounded-full bg-blue-500 hover:bg-blue-600 text-white transition duration-300"
      >
        <Send size={18} />
      </button>
    </div>
  );
};

export default MessageInput;