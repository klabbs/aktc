import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="logo">
        <h3>APTECH KUBWA</h3>
        <p>STAFF PORTAL V2.0</p>
      </div>

      <ul className="menu">
        <li><Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>Dashboard</Link></li>
        <li><Link to="/attendance" style={{ textDecoration: 'none', color: 'inherit' }}>Attendance</Link></li>
        <li>Materials</li>
        <li className="active"><Link to="/gradebook" style={{ textDecoration: 'none', color: 'inherit' }}>Gradebook</Link></li>
        <li>Timetable</li>
        <li>Faculty</li>
      </ul>

      <div className="profile">
        <img src="https://i.pravatar.cc/60?img=5" alt="profile" />
        <div>
          <h4>Dr. Elena Silk</h4>
          <span>Senior Faculty</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;