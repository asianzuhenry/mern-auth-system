import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Login failed");
        return;
      }

      // ✅ Save token in localStorage
      localStorage.setItem("token", data.token);

      // ✅ Redirect to profile page
      navigate("/profile");
    } catch (err) {
      console.error("Login error:", err);
      setError("Something went wrong. Try again.");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded">
      <h2>Login</h2>
      <form onSubmit={handleLogin} className="space-y-4 mt-4">
        <div>
          <input
            type="email"
            value={email}
            className="border p-2 w-full"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <input
            type="password"
            value={password}
            className="border p-2 w-full"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <button className="bg-blue-500 text-white p-2 rounded" type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
