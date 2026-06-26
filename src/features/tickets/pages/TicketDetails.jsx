import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getComplaintById } from "../api/Ticketapi";

const TicketDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [ticket, setTicket] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadTicket = async () => {
      try {
        setLoading(true);
        const response = await getComplaintById(id);
        const data = response.data?.data ?? response.data;
        setTicket(data);
      } catch (err) {
        setError(err?.response?.data?.message || "Failed to load ticket");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      loadTicket();
    }
  }, [id]);

  if (loading) return <p>Loading ticket details...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;
  if (!ticket) return <p>No ticket found.</p>;

  return (
    <div>
      <button onClick={() => navigate(-1)}>Back</button>
      <h1>Ticket Details</h1>

      <dl>
        <dt>Subject</dt>
        <dd>{ticket.subject}</dd>

        <dt>Description</dt>
        <dd>{ticket.description}</dd>

        <dt>Status</dt>
        <dd>{ticket.status}</dd>

        <dt>Priority</dt>
        <dd>{ticket.priority}</dd>

        <dt>User</dt>
        <dd>{ticket.user?.name || ticket.user || "Unknown"}</dd>

        <dt>Assigned To</dt>
        <dd>{ticket.assignedTo?.name || ticket.assignedTo || "Unassigned"}</dd>

        <dt>Created At</dt>
        <dd>{ticket.createdAt ? new Date(ticket.createdAt).toLocaleString() : "-"}</dd>

        <dt>Updated At</dt>
        <dd>{ticket.updatedAt ? new Date(ticket.updatedAt).toLocaleString() : "-"}</dd>
      </dl>
    </div>
  );
};

export default TicketDetails;