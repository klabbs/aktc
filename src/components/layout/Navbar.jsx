import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { logout } from "../../store/slices/authSlice"
import { sidebarLinks } from "./../../constants/sidebarLinks";

const Navbar = ({ sidebarOpen, setSidebarOpen }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const currentLink = sidebarLinks.find(
    (link) => link.path === location.pathname
  );
  const title = currentLink?.label || "Dashboard";
  const { isAuthenticated, user } = useSelector(
    (state) => state.auth
  )

  const handleLogout = () => {
    dispatch(logout())
    navigate("/login")
  }

  return (
    <header className="topbar">
      <button
        className="menu-toggle"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <i className="fa-solid fa-bars"></i>
      </button>
            <h2>{title}</h2>

            <div className="top-actions">

                <div className="search">
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <input type="text" placeholder="Search courses..."/>
                </div>

                <i className="fa-regular fa-bell"></i>
                <i className="fa-regular fa-id-card"></i>

                <img src="https://i.pravatar.cc/45" className="avatar"/>

            </div>

        </header>

   )
}

export default Navbar