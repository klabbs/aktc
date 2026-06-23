import { useDispatch, useSelector } from "react-redux";
import "../pages/Ticket.css";

const TicketForm = ({
  formData,
  setFormData,
  onSubmit,
  error,
}) => {
    const { user } = useSelector(
      (state) => state.auth
    )
    const handleChange = (e) => {
      const { name, value } = e.target;
  
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (typeof onSubmit === "function") {
      await onSubmit(formData);
    }
  };
  
    return (
      <div className="ticket-form">
        <form onSubmit={handleSubmit}>
          <label>
            User ID:
            <input
              name="user"
              value={formData?.user || user?.id}
              onChange={handleChange}
            />
          </label>
          <hr />

          <label>
            Subject;
            <input
              name="subject"
              value={formData?.subject || ""}
              onChange={handleChange}
            />
          </label>
          <hr />

          <label>
            Description:
            <textarea
              name="description"
              value={formData?.description || ""}
              onChange={handleChange}
              rows={4}
            />
          </label>
          <hr />

          <label>
            Priority:
            <select
              name="priority"
              value={formData?.priority || "medium"}
              onChange={handleChange}
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </label>
          <hr />

          <label>
            Status:
            <select
              name="status"
              value={formData?.status || "open"}
              onChange={handleChange}
            >
              <option value="open">Open</option>
              <option value="in-progress">In Progress</option>
              <option value="resolved">Resolved</option>
              <option value="closed">Closed</option>
            </select>
          </label>
          <hr />

          <label>
            Assigned To (user ID):
            <input
              name="assignedTo"
              value={formData?.assignedTo || user?.id}
              onChange={handleChange}
            />
          </label>
          <hr />

          <button type="submit">Save Ticket</button>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
        <div className="grade-card">
           <h3>Quick Complaint Entry</h3>
            <form onSubmit={handleSubmit}>
              <input
              name="user"
              value={formData?.user || user?.id}
              onChange={handleChange}
            />
                <input type="text" placeholder="Subject" 
                name="subject"
              value={formData?.subject || ""}
              onChange={handleChange}/>
                <textarea placeholder="Subject of your complaint"
                name="description"
              value={formData?.description || ""}
              onChange={handleChange}></textarea>

                        <textarea placeholder="Complaints"></textarea>

                        <button>Submit Complaint</button>
            </form>
                    </div>
      </div>  
    );
  };
  
  export default TicketForm;