import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useDocumentTitle from "../../../hooks/UseDocumentTitle";
import "../styles/events.css";

const EventDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  useDocumentTitle("Event Details | AKTC");

  useEffect(() => {
    // Fetch event details
    const fetchEventDetails = async () => {
      try {
        // Replace with actual API call
        // const response = await getEvent(id);
        // setEvent(response.data);
        
        // Mock data for now
        setEvent({
          id,
          eventName: "Tech Conference 2024",
          organizer: "IT Department",
          date: "2024-07-15T09:00",
          location: "Main Auditorium",
          description: "A comprehensive conference on emerging technologies.",
          capacity: 500,
          registeredAttendees: 320,
          status: "Upcoming"
        });
      } catch (error) {
        console.error("Error fetching event:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEventDetails();
  }, [id]);

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

  if (!event) {
    return (
      <div className="events-container">
        <aside className="events-sidebar">
          <div className="events-logo">
            <h3>APTECH KUBWA</h3>
            <p>ADMIN PORTAL V2.0</p>
          </div>
        </aside>
        <main className="events-main">
          <p>Event not found</p>
        </main>
      </div>
    );
  }

  const handleEdit = () => {
    navigate(`/admin/events/${id}/edit`);
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this event?")) {
      // Delete logic here
      navigate("/admin/events");
    }
  };

  const handleBack = () => {
    navigate("/admin/events");
  };

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
            <h2>{event.eventName}</h2>
            <p>Event details and information</p>
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
            <p>Total Capacity</p>
            <h2>{event.capacity}</h2>
            <small>Seats available</small>
          </div>

          <div className="events-card">
            <p>Registered Attendees</p>
            <h2>{event.registeredAttendees}</h2>
            <small className="green">{Math.round((event.registeredAttendees / event.capacity) * 100)}% capacity</small>
          </div>

          <div className="events-card">
            <p>Status</p>
            <h4>{event.status}</h4>
            <small>Current state</small>
          </div>

          <div className="events-card">
            <p>Availability</p>
            <h2>{event.capacity - event.registeredAttendees}</h2>
            <small>Seats remaining</small>
          </div>
        </div>

        {/* Details Section */}
        <div className="events-form-container">
          <h3>Event Information</h3>
          <div className="event-details">
            <div className="detail-row">
              <div className="detail-group">
                <label>Event Name</label>
                <p>{event.eventName}</p>
              </div>
              <div className="detail-group">
                <label>Organizer</label>
                <p>{event.organizer}</p>
              </div>
            </div>

            <div className="detail-row">
              <div className="detail-group">
                <label>Date & Time</label>
                <p>{new Date(event.date).toLocaleString()}</p>
              </div>
              <div className="detail-group">
                <label>Location</label>
                <p>{event.location}</p>
              </div>
            </div>

            <div className="detail-row full-width">
              <div className="detail-group full-width">
                <label>Description</label>
                <p>{event.description}</p>
              </div>
            </div>

            <div className="event-actions">
              <button className="btn-back" onClick={handleBack}>
                <i className="fa-solid fa-arrow-left"></i> Back
              </button>
              <button className="btn-edit" onClick={handleEdit}>
                <i className="fa-solid fa-edit"></i> Edit Event
              </button>
              <button className="btn-delete" onClick={handleDelete}>
                <i className="fa-solid fa-trash"></i> Delete
              </button>
            </div>
          </div>
        </div>

        {/* Insights */}
        <div className="events-insights">
          <h4>Event Statistics</h4>
          <p>
            Registration Rate
            <strong>{Math.round((event.registeredAttendees / event.capacity) * 100)}%</strong>
          </p>
          <div className="events-progress">
            <div className="fill" style={{ width: `${(event.registeredAttendees / event.capacity) * 100}%` }}></div>
          </div>
          <p>
            Available Seats
            <strong>{event.capacity - event.registeredAttendees}</strong>
          </p>
        </div>
      </main>
    </div>
  );
};

export default EventDetails;
