import { useNavigate } from "react-router-dom";
import EventsTable from "../components/EventsTable";
import useDocumentTitle from "../../../hooks/UseDocumentTitle";
import "../styles/events.css";

const EventsPage = () => {
  const navigate = useNavigate();
  useDocumentTitle("Events | AKTC");

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
            <h2>Events</h2>
            <p>Manage all events and attendees</p>
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
            <p>Total Events</p>
            <h2>24</h2>
            <small className="green">+3 this month</small>
          </div>

          <div className="events-card">
            <p>Upcoming Events</p>
            <h2>8</h2>
            <small>Scheduled</small>
          </div>

          <div className="events-card">
            <p>Total Attendees</p>
            <h2>342</h2>
            <small>Registered</small>
          </div>

          <div className="events-card">
            <p>Avg. Attendance</p>
            <h2>89%</h2>
            <small className="green">Excellent</small>
          </div>
        </div>

        {/* Events Table */}
        <div className="events-form-container">
          <EventsTable />
        </div>

        {/* Insights */}
        <div className="events-insights">
          <h4>Events Overview</h4>
          <p>
            Active Events
            <span>12 running</span>
          </p>
          <p>
            Completed Events
            <span>12 finished</span>
          </p>
          <p>
            Pending Review
            <span>2 awaiting</span>
          </p>
          <div className="events-progress">
            <div className="fill" style={{ width: "85%" }}></div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default EventsPage;