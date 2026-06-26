import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import EventsForm from "../../events/components/EventsForm";
import useDocumentTitle from "../../../hooks/UseDocumentTitle";
import "../styles/events.css";

const EditEventPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    eventName: "",
    organizer: "",
    date: "",
    location: "",
    description: "",
    capacity: ""
  });
  const [loading, setLoading] = useState(true);
  useDocumentTitle("Edit Event | AKTC");

  useEffect(() => {
    // Fetch event data to populate form
    const fetchEvent = async () => {
      try {
        // Replace with actual API call
        // const response = await getEvent(id);
        // setFormData(response.data);

        // Mock data for now
        setFormData({
          eventName: "Tech Conference 2024",
          organizer: "IT Department",
          date: "2024-07-15T09:00",
          location: "Main Auditorium",
          description: "A comprehensive conference on emerging technologies.",
          capacity: "500"
        });
      } catch (error) {
        console.error("Error fetching event:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvent();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Replace with actual API call
      // await updateEvent(id, formData);
      
      console.log("Updating event:", formData);
      navigate(`/admin/events/${id}`);
    } catch (error) {
      console.error("Error updating event:", error);
    }
  };

  const handleCancel = () => {
    navigate(`/admin/events/${id}`);
  };

  if (loading) {
    return (
      <div className="events-container">
        <aside className="events-sidebar">
          <div className="events-logo">
            <h3>APTECH KUBWA</h3>
            <p>ADMIN PORTAL V2.0</p>
          </div>
        </aside>
        <main className="events-main">
          <p>Loading...</p>
        </main>
      </div>
    );
  }

  return (
    <div className="events-container">
      {/* Sidebar */}
      <aside className="events-sidebar">
        <div className="events-logo">
          <h3>APTECH KUBWA</h3>
          <p>ADMIN PORTAL V2.0</p>
        </div>

        <ul className="events-menu">
          <li><i className="fa-solid fa-table-columns"></i> Dashboard</li>
          <li className="active"><i className="fa-regular fa-calendar"></i> Events</li>
          <li onClick={() => navigate("/admin/events/create")}>
            <i className="fa-solid fa-plus"></i> Create Event
          </li>
          <li><i className="fa-regular fa-users"></i> Attendees</li>
          <li><i className="fa-solid fa-cog"></i> Settings</li>
        </ul>

        <div className="events-profile">
          <img src="https://i.pravatar.cc/60?img=5" alt="Admin" />
          <div>
            <h4>Admin User</h4>
            <span>Administrator</span>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="events-main">
        {/* Top Bar */}
        <div className="events-topbar">
          <div>
            <h2>Edit Event</h2>
            <p>Update event information</p>
          </div>

          <div className="events-top-right">
            <i className="fa-regular fa-bell"></i>
            <span>Admin</span>
            <img src="https://i.pravatar.cc/40?img=12" alt="Admin" />
          </div>
        </div>

        {/* Stats */}
        <div className="events-stats">
          <div className="events-card">
            <p>Event Status</p>
            <h4>Under Review</h4>
            <small>Changes pending</small>
          </div>

          <div className="events-card">
            <p>Last Modified</p>
            <h4>Today</h4>
            <small>2 hours ago</small>
          </div>

          <div className="events-card">
            <p>Modified By</p>
            <h4>Admin User</h4>
            <small>Administrator</small>
          </div>

          <div className="events-card">
            <p>Version</p>
            <h2>2.0</h2>
            <small>Current version</small>
          </div>
        </div>

        {/* Form Section */}
        <div className="events-form-container">
          <h3>Event Details</h3>
          <EventsForm
            formData={formData}
            setFormData={setFormData}
            onSubmit={handleSubmit}
            onCancel={handleCancel}
            isEditing={true}
          />
        </div>

        {/* Insights */}
        <div className="events-insights">
          <h4>Editing Guidelines</h4>
          <p>
            Event Name
            <span>Update the event title if needed</span>
          </p>
          <p>
            Date & Time
            <span>Ensure all attendees are notified of changes</span>
          </p>
          <p>
            Capacity
            <span>Adjust based on venue requirements</span>
          </p>
          <div className="events-progress">
            <div className="fill" style={{ width: "100%" }}></div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default EditEventPage;
