# 📦 Frontend (React + Tailwind)

The frontend is built with React, Vite, and Tailwind CSS. It handles user registration, login, and dashboard views. Authentication state is managed using React Router and stored in localStorage.

## 🔹 Features

- Register and login forms

- Form validation with React hooks

- Secure API requests to backend (JWT support)

- Protected routes using React Router

- Styled with Tailwind CSS v4

## 🚀 Setup Instructions
```
cd frontend
npm install

```

Start development server:
```
npm run dev
```
Then open: http://localhost:5173

## 📁 Project Structure
```bash
frontend/
│
├── public/               # Static assets
├── src/
│   ├── components/       # Reusable UI components
│   ├── pages/            # Register, Login, Dashboard
│   ├── App.jsx           # Main app with routes
│   ├── index.css         # Tailwind imports
│   └── main.jsx          # Entry point
│
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

