// src/pages/Profile.jsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Profile() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      navigate("/"); // redirect if not logged in
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/");
  };

  if (!user) return null;

  return (
    <div className="profile-page" style={{ padding: "2rem" }}>
      <h1>👤 Profile</h1>
      <div className="profile-card" style={{
        background: "#fff",
        borderRadius: "12px",
        padding: "1.5rem",
        maxWidth: "500px",
        margin: "1rem auto",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
      }}>
        <p><strong>First Name:</strong> {user.firstname}</p>
        <p><strong>Last Name:</strong> {user.lastname}</p>
        <p><strong>Email:</strong> {user.email}</p>

        <button 
          onClick={handleLogout} 
          className="btn btn-danger"
          style={{
            marginTop: "1rem",
            padding: "0.6rem 1.2rem",
            background: "#ef4444",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer"
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Profile;
