import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const User = () => {
  const { id } = useParams(); // Tries to grab ID from /user/:id
  const navigate = useNavigate(); // Used to change the URL programmatically

  const [inputId, setInputId] = useState("");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch data only if an ID actually exists in the URL path
  useEffect(() => {
    if (!id) {
      setUserData(null); // Clear previous data if navigating back to plain /user
      return;
    }

    setLoading(true);
    setError(null);

    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => {
        if (!response.ok) throw new Error("User not found");
        return response.json();
      })
      .then((data) => {
        setUserData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setUserData(null);
        setLoading(false);
      });
  }, [id]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (inputId.trim() === "") return;

    // Pushes the ID into the route URL (e.g., shifts URL to /user/3)
    navigate(`/user/${inputId.trim()}`);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h3>Search User Profile</h3>

      {/* Input Form */}
      <form onSubmit={handleSearch} style={{ marginBottom: "20px" }}>
        <input
          type="number"
          placeholder="Enter User ID (1-10)"
          value={inputId}
          onChange={(e) => setInputId(e.target.value)}
          style={{ padding: "8px", marginRight: "10px", width: "180px" }}
        />
        <button
          type="submit"
          style={{ padding: "8px 16px", cursor: "pointer" }}
        >
          Fetch Details
        </button>
      </form>

      <hr />

      {/* Conditional Rendering Status Blocks */}
      {loading && <div>Loading user details...</div>}
      {error && <div style={{ color: "red" }}>Error: {error}</div>}

      {/* Display data only if a user is found and loading finished */}
      {!loading && userData && (
        <div
          style={{
            padding: "20px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            marginTop: "15px",
            maxWidth: "400px",
          }}
        >
          <h2>{userData.name}</h2>
          <p>
            <strong>Username:</strong> @{userData.username}
          </p>
          <p>
            <strong>Email:</strong> {userData.email}
          </p>
          <p>
            <strong>Phone:</strong> {userData.phone}
          </p>
          <p>
            <strong>Website:</strong> {userData.website}
          </p>
          <p>
            <strong>Company:</strong> {userData.company?.name}
          </p>
        </div>
      )}

      {/* Default message when no ID has been entered or searched yet */}
      {!id && !loading && (
        <p style={{ color: "#666" }}>
          Please enter an ID above to view details.
        </p>
      )}
    </div>
  );
};

export default User;
