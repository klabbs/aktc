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
    
    //set user and assignedTo
    formData.user = user;
    formData.assignedTo = user;
    if (typeof onSubmit === "function") {
      await onSubmit(formData);
    }
  };
  
    return (
      <div className="ticket-form">
        <div className="grade-card">
            <h3>Quick Complaint Entry</h3>
            <form onSubmit={handleSubmit}>
              <input 
                type="text" 
                placeholder="Subject" 
                name="subject"
                value={formData?.subject || ""}
                onChange={handleChange}
                />
                <textarea 
                  placeholder="Subject of your complaint"
                  name="description"
                  value={formData?.description || ""}
                  onChange={handleChange}>
                </textarea>
                <div className="mt-5">
                  <label>Priority</label>
                  <select>
                    <option>High</option>
                    <option>Medium</option>
                    <option>Low</option>
                </select>
                </div>
                <button type="submit">Submit Complaint</button>
                {error && <p style={{ color: "red" }}>{error}</p>}
              </form>
            </div>
      </div>  
    );
  };
  
  export default TicketForm;