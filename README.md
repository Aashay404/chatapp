# Chatapp

A full stack real-time chat application built using React, Node.js, Express, MongoDB, and Socket.io.
The application supports user authentication and live messaging between connected users.

## Tech Stack

### Frontend:

React (Vite)

Tailwind CSS

React Router

Socket.io Client

### Backend:

Node.js

Express

MongoDB using (Mongoose)

Socket.io

JWT Authentication

bcryptjs

## Project Structure

Chatapp/

chatapp/ (Frontend)

server/ (Backend)

## Setup
### Backend

cd server
npm install

Create a .env file inside server folder:

PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/chatapp
JWT_SECRET=your_secret_key

Run the backend:

npm run dev

### Frontend system

cd chatapp
npm install
npm run dev


