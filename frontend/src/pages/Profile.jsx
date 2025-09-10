import { useEffect, useState } from "react";

function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("token");
      const res = await fetch("http://localhost:5000/api/auth/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();
      setUser(data);
    };
    fetchProfile();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-2xl font-bold">Profile Page</h1>
      <div className="flex border p-10 rounded-2xl items-center mt-6 bg-blue-50 flex-col">
        <img
          src="https://www.gravatar.com/avatar/?d=mp&s=200"
          alt=""
          className="w-32 h-32 rounded-full mt-4"
        />
        {user ? (
          <p className="mt-4">Welcome {user.username}</p>
        ) : (
          <p className="mt-4">Loading...</p>
        )}
      </div>
    </div>
  );
}

export default Profile;
