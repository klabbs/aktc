import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createComplaint } from "../api/Ticketapi";
import TicketForm from "../components/TicketForm";

const CreateTicketPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    user: "",
    subject: "",
    description: "",
    priority: "medium",
    status: "open",
    assignedTo: "",
  });
  const [error, setError] = useState(null);

  const handleSubmit = async (data) => {
    try {
      setError(null);
      const response = await createComplaint(data);
      //console.log("Ticket created", response.data);
      setFormData({
        user: "",
        subject: "",
        description: "",
        priority: "medium",
        status: "open",
        assignedTo: "",
      });
      navigate('/tickets');
      setTimeout(() => {
        window.location.reload();
      }, 0);
    } catch (err) {
      setError(err?.response?.data?.message || "Failed to create ticket");
    }
  };

  return (
    <div>
      <div>
        <h3>Add Ticket</h3>
      </div>
      <TicketForm
        formData={formData}
        setFormData={setFormData}
        onSubmit={handleSubmit}
        error={error}
      />
    </div>
  );
};

export default CreateTicketPage;