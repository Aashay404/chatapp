const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const http = require("http");
const { Server } = require("socket.io");
let onlineUsers = [];

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", require("./routes/authRoutes"));

app.get("/", (req, res) => {
  res.send("API Running");
});

// 🔥 Create HTTP server
const server = http.createServer(app);

// 🔥 Initialize Socket.io
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

// 🔥 Socket logic
io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  // When user joins
  socket.on("user_online", (username) => {
    onlineUsers.push({ id: socket.id, name: username });

    // Remove duplicates
    onlineUsers = onlineUsers.filter(
      (user, index, self) =>
        index === self.findIndex((u) => u.name === user.name)
    );

    io.emit("update_users", onlineUsers);
  });

  socket.on("send_message", (data) => {
    socket.broadcast.emit("receive_message", data);
  });

  socket.on("disconnect", () => {
    onlineUsers = onlineUsers.filter((u) => u.id !== socket.id);
    io.emit("update_users", onlineUsers);
    console.log("User disconnected");
  });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});