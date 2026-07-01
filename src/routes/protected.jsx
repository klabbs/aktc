import { Navigate } from "react-router-dom"
import { useSelector } from "react-redux"

import AuthLoader from "../components/common/AuthLoader"

const ProtectedRoute = ({ children }) => {
  const {
    isAuthenticated,
    authInitialized,
  } = useSelector((state) => state.auth)

  if (!authInitialized) {
    return <AuthLoader />
  }

  if (!isAuthenticated) {
    return (
      <Navigate to="/login" replace/>
    )
  }

  return children
}

export default ProtectedRoute