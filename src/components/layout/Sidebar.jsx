import { Link } from "react-router-dom"
import { useSelector } from "react-redux";
import { sidebarLinks } from "./../../constants/sidebarLinks";


const Sidebar = () => {
  const { user } = useSelector(
    (state) => state.auth
  );
  return (
    <aside className="w-64 bg-gray-900 text-white min-h-screen p-5">
      <hr/>
      <ul className="space-y-4">
        {sidebarLinks
          .filter((link) =>
            link.roles.includes(user?.role)
          )
          .map((link) => (
            <li key={link.path}>
              <Link to={link.path}>
                {link.label}
              </Link>
            </li>
          ))}
      </ul>
    </aside>
  )
}

export default Sidebar