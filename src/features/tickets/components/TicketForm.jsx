const TicketForm = ({
  formData,
  setFormData,
  onSubmit,
  error,
}) => {
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
      <form onSubmit={handleSubmit}>
        <label>
          User ID:
          <input
            name="user"
            value={formData?.user || ""}
            onChange={handleChange}
          />
        </label>
        <hr />

        <label>
          Subject:
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
            value={formData?.assignedTo || ""}
            onChange={handleChange}
          />
        </label>
        <hr />

        <button type="submit">Save Ticket</button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
    );
  };
  
  export default TicketForm;