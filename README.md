# MERN Auth System 🔐

A basic full-stack authentication system built with **Node.js, Express, MongoDB, React, and Tailwind CSS**.  
This project demonstrates how to implement user **registration**, **login**, **JWT-based authentication**, and **protected routes** in a MERN stack application.

---

## 📂 Project Structure
```
mern-auth-system/
│
├── backend/ # Node.js + Express + JWT + MongoDB
│ ├── src/
│ ├── package.json
│ └── ...
│
├── frontend/ # React + Tailwind
│ ├── src/
│ ├── package.json
│ └── ...
│
└── README.md
```
---

## 🚀 Features
- User Registration (with hashed passwords using **bcrypt**)  
- User Login with **JWT Authentication**  
- Protected API routes (accessible only with a valid token)  
- React frontend with **Tailwind CSS** styling  
- State management for authentication (context or hooks)  
- Redirect users based on authentication status  

---

## 🛠️ Tech Stack
**Backend:** Node.js, Express, MongoDB, Mongoose, JWT, Bcrypt, Dotenv  
**Frontend:** React, Tailwind CSS, React Router  

---

## ⚙️ Setup Instructions

### 1. Clone the repo
```bash
git clone https://github.com/your-username/mern-auth-system.git
cd mern-auth-system
