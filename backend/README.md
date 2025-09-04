# ⚙️ Backend (Node.js + Express + MongoDB + JWT)

The backend is built with Node.js, Express, MongoDB, and JWT authentication. It provides secure APIs for user registration, login, and protected routes. Passwords are hashed using bcryptjs.

## 🔹 Features

- User registration with encrypted passwords

- Login with JWT token generation

- Protected routes with middleware

- MongoDB (Mongoose) integration

- CORS enabled for frontend communication

## 🚀 Setup Instructions

1. Go to backend folder:
```bash
cd backend
npm install
```

2. Create a `.env` file in the backend directory and add the following environment variables:
```bash
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```
3. Start the backend server:
```
npm run dev
```

The API will run on http://localhost:5000

## 📁 Project Structure
```bash
backend/
│
├── src/
│   ├── config/          # Database connection
│   ├── controllers/     # Auth logic (register, login)
│   ├── middleware/      # Auth middleware (protect routes)
│   ├── models/          # User schema
│   └── routes/          # Auth routes
│
├── app.js               # Express app setup
├── server.js            # Server entry point
├── package.json
└── .env.example         # Example environment variables
```

## 🛠️ API Endpoints
| Method | Endpoint    | Description          | Protected |
| ------ | ----------- | -------------------- | --------- |
| POST   | `/register` | Register new user    | ❌         |
| POST   | `/login`    | Login user & get JWT | ❌         |
| GET    | `/profile`  | Get logged-in user   | ✅         |
