import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { getAnnouncementById, deleteAnnouncement } from "../api/announcementApi";

const AnnouncementDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [announcement, setAnnouncement] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadAnnouncement
  },);

  const loadAnnouncement = async () => {
    try {
      setLoading(true);
      const res = await getAnnouncementById(id);
      setAnnouncement(res.data?.data || res.data);
    } catch (err) {
      setError("Failed to load announcement");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this announcement?")) {
      try {
        await deleteAnnouncement(id);
        navigate("/announcements");
      } catch (err) {
        console.error("Failed to delete announcement:", err);
        alert("Failed to delete announcement");
      }
    }
  };

  if (loading) return <p>Loading announcement...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;
  if (!announcement) return <p>Announcement not found</p>;

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
        <h2>Announcement Details</h2>
        <div>
          <Link to={`/announcements/${id}/edit`}>
            <button style={{ marginRight: "10px" }}>Edit</button>
          </Link>
          <button 
            onClick={handleDelete} 
            style={{ backgroundColor: "#dc3545", color: "white", border: "none", padding: "8px 16px" }}
          >
            Delete
          </button>
        </div>
      </div>

      <div style={{ border: "1px solid #ddd", padding: "20px", borderRadius: "4px" }}>
        <h3>{announcement.title}</h3>
        <p style={{ color: "#666", marginBottom: "15px" }}>
          {announcement.createdAt && new Date(announcement.createdAt).toLocaleDateString()}
        </p>
        <div style={{ whiteSpace: "pre-wrap", lineHeight: "1.6" }}>
          {announcement.content}
        </div>
        {announcement.category && (
          <p style={{ marginTop: "15px" }}>
            <strong>Category:</strong> {announcement.category}
          </p>
        )}
      </div>

      <div style={{ marginTop: "20px" }}>
        <Link to="/announcements">
          <button>Back to Announcements</button>
        </Link>
      </div>
    </div>
  );
};

export default AnnouncementDetails;