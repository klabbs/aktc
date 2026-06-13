import { Navigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { getDefaultRouteByRole } from "../utils/auth"

const RoleRoute = ({
    children,
    allowedRoles,
  }) => {
    const {
      user,
      isAuthenticated,
      authInitialized,
    } = useSelector((state) => state.auth)
  
    // Prevent route flashing
    if (!authInitialized) {
      return null
    }
  
    // Not logged in
    if (!isAuthenticated) {
      return (
        <Navigate to="/login" replace/>
      )
    }
  
    // Logged in but unauthorized
    // if (!allowedRoles.includes(user?.role)) {
    if (!allowedRoles.includes(user && user.role)) {
      return (
        <Navigate
          to={getDefaultRouteByRole(user?.role)}
          replace
        />
      )
    }
  
    return children
  }
  
export default RoleRoute