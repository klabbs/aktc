import { useEffect } from "react";
import { useUsers } from "../hooks/TicketUse";

const TicketTable = () => {
  const { complaints, loadComplaints, loading, error } = useUsers();

  useEffect(() => {
    // load complaints on mount
    loadComplaints().catch(() => {});
  }, []);

  if (loading) return <p>Loading tickets...</p>;
  if (error) return <p>Error loading tickets</p>;

  if (!complaints?.success) return <p>No tickets available</p>;

  const tickets = complaints.data || [];

  return (
    <table>
      <thead>
        <tr>
          <th>Subject</th>
          <th>Description</th>
          <th>Priority</th>
          <th>Status</th>
          <th>User</th>
          <th>Assigned To</th>
          <th>Created</th>
        </tr>
      </thead>

      <tbody>
        {tickets.map((t) => (
          <tr key={t._id}>
            <td>{t.subject}</td>
            <td>{t.description}</td>
            <td>{t.priority}</td>
            <td>{t.status}</td>
            <td>{t.user?.name || t.user}</td>
            <td>{t.assignedTo?.name || t.assignedTo}</td>
            <td>{t.createdAt ? new Date(t.createdAt).toLocaleString() : "-"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TicketTable;