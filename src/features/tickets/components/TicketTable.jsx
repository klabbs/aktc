import { useEffect } from "react";
import { useUsers } from "../hooks/TicketUse";
import "../pages/Ticket.css";

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
    <div className="ticket-table">
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
      <div className="submissions">
        <h3>Recent Student Submissions</h3>
        {tickets.map((t) => (

           <div className="row" key={t._id}>
              <img src="https://i.pravatar.cc/50?img=8" alt="Alex Rivera"/>
              <span>Alex Rivera<br/>
              <strong>Complaints: </strong>{t.subject}</span>
                        <span className="status submitted">Submitted</span>
                       
          </div>
        ))}
                    
                </div>
    </div>
  );
};

export default TicketTable;