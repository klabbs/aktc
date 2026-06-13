import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { logout } from "../../store/slices/authSlice"

const Navbar = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { isAuthenticated, user } = useSelector(
    (state) => state.auth
  )

  const handleLogout = () => {
    dispatch(logout())
    navigate("/login")
  }

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between">
      <h1 className="text-2xl font-bold text-blue-600">
        AKTC
      </h1>

      <div className="flex items-center gap-4">
        {isAuthenticated && (
          <>
            <span>
              {user.name} - {user.role}
            </span>

            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  )
}

export default Navbar