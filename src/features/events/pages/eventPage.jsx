import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getEventById } from "../api/eventsApi";

const EventDetails = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await getEventById(id);
        setItem(res.data?.data || res.data);
      } catch (error) {
        console.error(error);
      }
    };

    load();
  }, [id]);

  if (!item) return <p>Loading event...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <Link to="/dashboard/events" style={{ textDecoration: "none", color: "#007bff" }}>
        ← Back to Events
      </Link>
      
      <h1 style={{ marginTop: "20px" }}>{item.eventName || item.title}</h1>
      
      <div style={{ marginTop: "20px" }}>
        <p><strong>Organizer:</strong> {item.organizer || "-"}</p>
        <p><strong>Location:</strong> {item.location || "-"}</p>
        <p><strong>Date & Time:</strong> {item.date ? new Date(item.date).toLocaleString() : "-"}</p>
        <p><strong>Description:</strong> {item.description || "-"}</p>
        <p><strong>Capacity:</strong> {item.capacity || "Unlimited"}</p>
      </div>
    </div>
  );
};

export default EventDetails;