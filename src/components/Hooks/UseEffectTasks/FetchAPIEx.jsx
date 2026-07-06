import { useEffect, useState } from "react";

const FetchAPIEx = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        if (data.length > 0) {
          setSelectedUser(data[0]); // Automatically select the first user on load
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div style={styles.centerMode}>Loading system data...</div>;
  }

  return (
    <div style={styles.appContainer}>
      {/* Left Sidebar: Master List */}
      <aside style={styles.sidebar}>
        <div style={styles.sidebarHeader}>
          <h2 style={styles.sidebarTitle}>Users</h2>
          <span style={styles.countBadge}>{users.length} total</span>
        </div>
        <div style={styles.listContainer}>
          {users.map((user) => {
            const isSelected = selectedUser?.id === user.id;
            return (
              <div
                key={user.id}
                onClick={() => setSelectedUser(user)}
                style={{
                  ...styles.listItem,
                  backgroundColor: isSelected ? "#e2e8f0" : "transparent",
                  borderLeft: isSelected ? "4px solid #2563eb" : "4px solid transparent",
                }}
              >
                <div style={styles.itemMeta}>
                  <div style={{
                    ...styles.miniAvatar, 
                    backgroundColor: isSelected ? "#2563eb" : "#cbd5e1",
                    color: isSelected ? "#fff" : "#475569"
                  }}>
                    {user.name[0]}
                  </div>
                  <div style={styles.itemTextContainer}>
                    <div style={styles.itemName}>{user.name}</div>
                    <div style={styles.itemSub}>{user.email}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </aside>

      {/* Right Content: Detailed Panel */}
      <main style={styles.detailPane}>
        {selectedUser ? (
          <div style={styles.profileWrapper}>
            {/* Profile Hero Block */}
            <div style={styles.heroSection}>
              <div style={styles.largeAvatar}>
                {selectedUser.name.split(" ").map(n => n[0]).join("")}
              </div>
              <div>
                <h1 style={styles.mainName}>{selectedUser.name}</h1>
                <p style={styles.mainTag}>Username: <strong>{selectedUser.username}</strong> &bull; ID: #{selectedUser.id}</p>
              </div>
            </div>

            {/* Content Grid */}
            <div style={styles.infoGrid}>
              
              {/* Card 1: Core Communication */}
              <div style={styles.infoCard}>
                <h3 style={styles.cardHeader}>Contact Information</h3>
                <div style={styles.dataRow}>
                  <span style={styles.label}>Email Address</span>
                  <span style={styles.value}>{selectedUser.email}</span>
                </div>
                <div style={styles.dataRow}>
                  <span style={styles.label}>Phone Number</span>
                  <span style={styles.value}>{selectedUser.phone}</span>
                </div>
                <div style={styles.dataRow}>
                  <span style={styles.label}>Website</span>
                  <span style={styles.value}>
                    <a href={`https://${selectedUser.website}`} target="_blank" rel="noreferrer" style={styles.link}>
                      {selectedUser.website}
                    </a>
                  </span>
                </div>
              </div>

              {/* Card 2: Corporate Assignment */}
              <div style={styles.infoCard}>
                <h3 style={styles.cardHeader}>Enterprise Environment</h3>
                <div style={styles.dataRow}>
                  <span style={styles.label}>Company Name</span>
                  <span style={{...styles.value, fontWeight: "600"}}>{selectedUser.company.name}</span>
                </div>
                <div style={styles.dataRow}>
                  <span style={styles.label}>Catchphrase</span>
                  <span style={{...styles.value, fontStyle: "italic"}}>"{selectedUser.company.catchPhrase}"</span>
                </div>
                <div style={styles.dataRow}>
                  <span style={styles.label}>Business Strategy</span>
                  <span style={styles.value}>{selectedUser.company.bs}</span>
                </div>
              </div>

              {/* Card 3: Location Details */}
              <div style={{...styles.infoCard, gridColumn: "1 / -1"}}>
                <h3 style={styles.cardHeader}>Geographic Location</h3>
                <div style={styles.addressSplit}>
                  <div>
                    <span style={styles.label}>Physical Address</span>
                    <p style={styles.addressBlock}>
                      {selectedUser.address.suite}, {selectedUser.address.street}<br />
                      {selectedUser.address.city}, {selectedUser.address.zipcode}
                    </p>
                  </div>
                  <div style={styles.geoBlock}>
                    <span style={styles.label}>Global Coordinates</span>
                    <div style={styles.coordinates}>
                      📍 Lat: {selectedUser.address.geo.lat} <br />
                      📍 Lng: {selectedUser.address.geo.lng}
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        ) : (
          <div style={styles.centerMode}>Select a user profile to inspect details</div>
        )}
      </main>
    </div>
  );
};

// Application CSS Layout
const styles = {
  appContainer: {
    display: "flex",
    height: "100vh",
    fontFamily: "system-ui, -apple-system, sans-serif",
    backgroundColor: "#f8fafc",
    overflow: "hidden",
  },
  sidebar: {
    width: "340px",
    backgroundColor: "#ffffff",
    borderRight: "1px solid #e2e8f0",
    display: "flex",
    flexDirection: "column",
    flexShrink: 0,
  },
  sidebarHeader: {
    padding: "1.25rem 1.5rem",
    borderBottom: "1px solid #e2e8f0",
    display: "flex",
    alignItems: "center",
    justifyContent: "between",
   
  },
  sidebarTitle: {
    fontSize: "1.25rem",
    margin: 0,
    color: "#0f172a",
    fontWeight: "700",
  },
  countBadge: {
    backgroundColor: "#f1f5f9",
    color: "#64748b",
    fontSize: "0.75rem",
    padding: "0.25rem 0.5rem",
    borderRadius: "12px",
    fontWeight: "500",
  },
  listContainer: {
    flex: 1,
    overflowY: "auto",
  },
  listItem: {
    padding: "1rem 1.25rem",
    cursor: "pointer",
    transition: "all 0.15s ease",
    borderBottom: "1px solid #f1f5f9",
  },
  itemMeta: {
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
  },
  miniAvatar: {
    width: "36px",
    height: "36px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "600",
    fontSize: "0.9rem",
    transition: "all 0.2s",
  },
  itemTextContainer: {
    overflow: "hidden",
  },
  itemName: {
    fontSize: "0.925rem",
    fontWeight: "600",
    color: "#1e293b",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  itemSub: {
    fontSize: "0.8rem",
    color: "#64748b",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  detailPane: {
    flex: 1,
    overflowY: "auto",
    backgroundColor: "#f8fafc",
  },
  profileWrapper: {
    padding: "2.5rem",
    maxWidth: "1000px",
    margin: "0 auto",
  },
  heroSection: {
    display: "flex",
    alignItems: "center",
    gap: "1.5rem",
    marginBottom: "2.5rem",
  },
  largeAvatar: {
    width: "72px",
    height: "72px",
    borderRadius: "20px",
    backgroundColor: "#dbeafe",
    color: "#2563eb",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1.75rem",
    fontWeight: "700",
    boxShadow: "0 4px 10px -2px rgba(37, 99, 235, 0.15)",
  },
  mainName: {
    fontSize: "2rem",
    margin: "0 0 0.25rem 0",
    color: "#0f172a",
    fontWeight: "800",
  },
  mainTag: {
    margin: 0,
    color: "#64748b",
    fontSize: "0.95rem",
  },
  infoGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
    gap: "1.5rem",
  },
  infoCard: {
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    padding: "1.5rem",
    border: "1px solid #e2e8f0",
    boxShadow: "0 1px 3px rgba(0,0,0,0.02)",
  },
  cardHeader: {
    fontSize: "0.85rem",
    textTransform: "uppercase",
    letterSpacing: "0.05em",
    color: "#94a3b8",
    margin: "0 0 1.25rem 0",
    borderBottom: "1px solid #f1f5f9",
    paddingBottom: "0.5rem",
  },
  dataRow: {
    display: "flex",
    justifyContent: "space-between",
    padding: "0.65rem 0",
    borderBottom: "1px solid #fafafa",
    fontSize: "0.925rem",
  },
  label: {
    color: "#64748b",
  },
  value: {
    color: "#1e293b",
    textAlign: "right",
  },
  link: {
    color: "#2563eb",
    textDecoration: "none",
  },
  addressSplit: {
    display: "flex",
    justifyContent: "space-between",
    gap: "2rem",
  },
  addressBlock: {
    fontSize: "0.95rem",
    color: "#1e293b",
    lineHeight: "1.5",
    margin: "0.5rem 0 0 0",
  },
  geoBlock: {
    backgroundColor: "#f1f5f9",
    padding: "1rem",
    borderRadius: "8px",
    minWidth: "180px",
  },
  coordinates: {
    fontFamily: "monospace",
    fontSize: "0.85rem",
    color: "#334155",
    marginTop: "0.5rem",
    lineHeight: "1.5",
  },
  centerMode: {
    display: "flex",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    color: "#64748b",
    fontSize: "1.1rem",
  },
};

export default FetchAPIEx;