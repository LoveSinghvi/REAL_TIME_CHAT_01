REAL_TIME_CHAT_01

Web-Based Chat Application (MERN Stack)

A fully functional real-time chat application built using the MERN stack — MongoDB, Express.js, React.js, Node.js — and powered by Socket.io for instant messaging. This project enables user registration, authentication, and seamless live chatting.

Technologies Used

MongoDB — Stores user data and chat history

Express.js & Node.js — Backend API and server

React.js — Frontend UI components and views

Socket.io — WebSocket-powered real-time communication

Tailwind CSS — Elegant and responsive styling

Project Structure
/frontend        # React.js client application
/backend         # Express.js & Node.js backend server
.gitignore
README.md
package.json     # Root-level scripts & common dependencies
package-lock.json

Getting Started
Prerequisites

Node.js & npm installed

A running MongoDB instance (local or cloud)

Setup Instructions

1. Clone the Repository

git clone https://github.com/LoveSinghvi/REAL_TIME_CHAT_01.git
cd REAL_TIME_CHAT_01


2. Backend Setup

cd backend
npm install


Set up environment variables by creating a .env file in the backend directory:

PORT=5000
MONGODB_URI=<your_mongodb_uri>
JWT_SECRET=<your_jwt_secret>


3. Frontend Setup

cd ../frontend
npm install


4. Run the Application

# In the backend directory
npm run start
# In the frontend directory (in a separate terminal)
npm start


Open your browser to http://localhost:3000 (or whichever port the React app uses) to interact with the chat.

Usage Overview

Register or log in with an existing account.

Once authenticated, you're taken to the chat interface.

Connect in real time with other online users — messages appear instantaneously.

Features at a Glance

Real-time bidirectional messaging with Socket.io

User authentication (registration & login)

Persistent chat logs via MongoDB

Responsive, modern UI styled with Tailwind CSS

Contributing

We welcome contributions! Please feel free to:

Open issues for bug reports or feature suggestions

Submit pull requests to enhance functionality, clean up code, or refine UI

About This Project

A great learning starter for developers exploring real-time apps and full-stack JavaScript, with clear separation between frontend and backend and easy-to-follow integration via WebSockets.