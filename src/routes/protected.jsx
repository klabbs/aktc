import { Navigate } from "react-router-dom"
import { useSelector } from "react-redux"

import AuthLoader from "../components/common/AuthLoader"

const ProtectedRoute = ({ children }) => {
  const {
    isAuthenticated,
    authInitialized,
  } = useSelector((state) => state.auth)

  if (!isAuthenticated) {
    return (
      <Navigate to="/login" replace/>
    )
  }
  
  if (!authInitialized) {
    return <AuthLoader />
  }

  return children
}

export default ProtectedRoute