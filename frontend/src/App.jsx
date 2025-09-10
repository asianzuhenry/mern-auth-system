import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import PrivateRoute from "./components/PrivateRoute";
import AdminRoute from "./components/AdminRoute";
import Register from "./components/Register";
import Login from "./components/Login";
import Dashboard from "./pages/Dashboard";
import "./App.css";

function App() {
  return (
    <Router>
      <nav className="p-4 bg-blue-100 flex justify-center gap-4">
        {/* Links work like <a>, but without refreshing */}
        <Link to="/">Home</Link> | <Link to="/profile">Profile</Link> |{" "}
        <Link to="/register">Register</Link> | <Link to="/login">Login</Link> |{" "}
        <Link to="/dashboard">Dashboard</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/profile" element={<Profile />} /> */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <AdminRoute>
              <Dashboard />
            </AdminRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
