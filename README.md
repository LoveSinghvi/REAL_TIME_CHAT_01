# Web-Based Chat Application

This is Web-Based Chat-Application developed using the MERN (MongoDB, Express.js, React.js, Node.js) stack. It allows users to register, log in, and chat with other users in real time.


## Technologies Used

- MongoDB: NoSQL database for storing user data and chat messages.
- Express.js: Web application framework for Node.js used to build the backend server.
- React.js: JavaScript library for building user interfaces.
- Node.js: JavaScript runtime environment for running server-side code.
- Socket.io: Real-time engine for WebSockets to enable real-time communication between clients and server.
- Tailwind/CSS: Markup and styling for the front end.

---

1. Navigate to the project directory:

   ```bash
   cd Chat-Application
   ```

2. Install dependencies for both frontend and backend
> For frontend dependencies Go to the frontend folder `Package.json` file
  and see all dependencies for installation

```bash
 npm i 
 npm i all_dependencies_name 
```


> For Backend Dependencies Go to the Chat-Application folder & refer directly available  `package.json` file:



```bash
 npm i 
 npm i all_dependencies_name 
```

3. Set up environment variables:
   
   - Create a `.env` file in the `Chat Application folder` directory.
   - Define the following variables in the `.env` file:
     ```
     PORT = 5000
     MONGODB_URI = <your_mongodb_uri>
     JWT_SECRET = <your_jwt_secret>
     ```

4. Run the development server:

   ```bash
   npm run start
   ```

6. Open your browser and navigate to `http://localhost:5000` to view the app functionality.

---

## Usage

1. Register for an account or log in if you already have one.
2. Once logged in, you'll be redirected to the chat interface.
3. Start messaging with other users who are online in real-time.

---

## Contributing

Contributions are welcome! Feel free to open issues or pull requests for any improvements or new features you'd like to see added.



 
