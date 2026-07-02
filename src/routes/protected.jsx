import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import AuthLoader from "../components/common/AuthLoader";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, authInitialized } = useSelector(
    (state) => state.auth
  );

  // 1. WAIT until auth is ready
  if (!authInitialized) {
    return <AuthLoader />;
  }

  // 2. THEN check auth
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
// import { Navigate } from "react-router-dom"
// import { useSelector } from "react-redux"

// import AuthLoader from "../components/common/AuthLoader"

// const ProtectedRoute = ({ children }) => {
//   const {
//     isAuthenticated,
//     authInitialized,
//   } = useSelector((state) => state.auth)

//   if (!isAuthenticated) {
//     return (
//       <Navigate to="/login" replace/>
//     )
//   }
  
//   if (!authInitialized) {
//     return <AuthLoader />
//   }

//   return children
// }

// export default ProtectedRoute