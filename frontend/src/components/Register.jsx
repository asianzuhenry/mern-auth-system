import { useState } from "react";

function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  async function handleSubmit(e) {
    e.preventDefault(); // stop form reload

    if (!formData.username || !formData.email || !formData.password) {
      console.error("All fields are required");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log("User added:", data);
    } catch (error) {
      console.error("Error adding user:", error);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md mx-auto mt-10">
      <input
        type="text"
        name="username"
        className="p-2 rounded border-2 border-blue-500"
        placeholder="Username"
        value={formData.username}
        onChange={(e) => setFormData(prev => ({ ...prev, username: e.target.value }))}
      />
      <input
        type="email"
        name="email"
        className="p-2 rounded border-2 border-blue-500"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
      />
      <input
        type="password"
        name="password"
        className="p-2 rounded border-2 border-blue-500"
        placeholder="Password"
        value={formData.password}
        onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition">Register</button>
    </form>
  );
}

export default Register;
