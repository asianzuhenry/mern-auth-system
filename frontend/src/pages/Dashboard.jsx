import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    async function checkAdmin() {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/login"); // 🔴 Not logged in → redirect
        return;
      }

      try {
        const res = await fetch("http://localhost:5000/api/auth/dashboard", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (res.status === 403) {
          navigate("/"); // 🔴 Logged in but not admin → redirect
          return;
        }

        if (res.ok) {
          setIsAdmin(true); // ✅ admin access confirmed
        }
      } catch (err) {
        console.error("Error:", err);
        navigate("/login"); // fallback
      } finally {
        setLoading(false);
      }
    }

    checkAdmin();
  }, [navigate]);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      {isAdmin ? (
        <h1 className="text-4xl font-bold">Welcome to the Admin Dashboard 🎉</h1>
      ) : (
        <h1 className="text-4xl font-bold">Redirecting...</h1>
      )}
    </div>
  );
}

export default Dashboard;
