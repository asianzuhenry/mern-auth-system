import { Navigate } from "react-router-dom";

function AdminRoute({ children }) {
  const token = localStorage.getItem("token");
  if (!token) {
    return <Navigate to="/login" replace />; // 🔴 Not logged in
  }

  // decode token to check role
  try {
    const payload = JSON.parse(atob(token.split(".")[1])); // decode JWT payload
    if (payload.role !== "admin") {
      return <Navigate to="/" replace />; // 🔴 Logged in but not admin
    }
  } catch {
    return <Navigate to="/login" replace />; // invalid token
  }

  return children; // ✅ user is admin
}

export default AdminRoute;
