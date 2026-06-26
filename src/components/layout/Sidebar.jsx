import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { sidebarLinks } from "./../../constants/sidebarLinks";


const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const { user } = useSelector(
    (state) => state.auth
  );
  const location = useLocation();
  return (
    // <aside className="w-64 bg-gray-900 text-white min-h-screen p-5">
    <aside className={`sidebar ${sidebarOpen ? "open" : ""}`}>
      <div className="logo">
        <h3>APTECH KUBWA</h3>
        <p>STAFF PORTAL V2.0</p>
      </div>

      <ul className="menu">
        {sidebarLinks
          .filter((link) => link.roles.includes(user?.role))
          .map((link) => (
            <li key={link.path} 
              className={
                location.pathname === link.path ? "active" : ""
              }>
              <i className={link.icon}></i>
              <Link to={link.path}>
                {link.label}
              </Link>
            </li>
          ))
        }
      </ul>

       <div className="profile">
            {/* <img src="https://i.pravatar.cc/60?img=5" alt=""/> */}
            <div>
                <h4>{user.name}</h4>
                <span style={{ textTransform: 'capitalize' }}>{user.role}</span>
            </div>
       </div>
      
    </aside>
  )
}

export default Sidebar