import { Routes, Route } from "react-router-dom"

import HomePage from "../pages/HomePage"
import LoginPage from "../pages/LoginPage"
import RegisterPage from "../pages/RegisterPage"

import DashboardPage from "../pages/dashboard/DashboardPage"

import MainLayout from "../layouts/MainLayout"
import DashboardLayout from "../layouts/DashboardLayout"

import ProtectedRoute from "./protected"
import RoleRoute from "./role"

import AdminDashboard from "../pages/admin/AdminDashboard"
import InstructorDashboard from "../pages/instructor/InstructorDashboard"
import StudentDashboard from "../pages/student/StudentDashboard"

//Feature Routes
import UsersRoutes from "../features/users/routes/UsersRoutes";
import CoursesRoutes from "../features/courses/routes/CoursesRoutes"
import BatchRoutes from "../features/batches/routes/BatchRoutes"
// import RegistrationRoutes from "../features/registration/routes/RegistrationRoutes"
import EnrollRoutes from "../features/enrollment/routes/EnrollRoutes"

const AppRoutes = () => {
  return (
    <Routes>
      {/* PUBLIC ROUTES */}
      <Route
        path="/"
        element={
          <MainLayout>
            <HomePage />
          </MainLayout>
        }
      />

      <Route
        path="/login"
        element={<LoginPage />}
      />

      <Route
        path="/register"
        element={<RegisterPage />}
      />

      {/* PROTECTED ROUTES */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardLayout>
              <DashboardPage />
            </DashboardLayout>
          </ProtectedRoute>
        }
      />

      {/*ROLE-BASED ROUTES*/}
      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <RoleRoute allowedRoles={["admin"]}>
              <DashboardLayout>
                <AdminDashboard />
              </DashboardLayout>
            </RoleRoute>
          </ProtectedRoute>
        }
      />

      <Route
        path="/instructor"
        element={
          <ProtectedRoute>
            <RoleRoute allowedRoles={["instructor"]}>
              <DashboardLayout>
                <InstructorDashboard />
              </DashboardLayout>
            </RoleRoute>
          </ProtectedRoute>
        }
      />

      <Route
        path="/student"
        element={
          <ProtectedRoute>
            <RoleRoute allowedRoles={["student"]}>
              <DashboardLayout>
                <StudentDashboard />
              </DashboardLayout>
            </RoleRoute>
          </ProtectedRoute>
        }
      />

      {/*FEATURES-ROUTES*/}
      <Route
        path="/admin/users/*"
        element={
          <ProtectedRoute>
            <RoleRoute allowedRoles={["admin"]}>
              <DashboardLayout>
                <UsersRoutes />
              </DashboardLayout>
            </RoleRoute>
          </ProtectedRoute>
        }
      />
    
      <Route
        path="/batches"
        element={
          <ProtectedRoute>
            <RoleRoute allowedRoles={["admin","management","instructor"]}>
              <DashboardLayout>
                <CoursesRoutes />
              </DashboardLayout>
            </RoleRoute>
          </ProtectedRoute>
        }
      />
      <Route
       path="/courses"
       element={
         <ProtectedRoute>
           <RoleRoute allowedRoles={["admin","management","instructor","student"]}>
             <DashboardLayout>
               <CoursesRoutes />
             </DashboardLayout>
           </RoleRoute>
         </ProtectedRoute>
       }
     />
     <Route
       path="/courses/:id"
       element={
         <ProtectedRoute>
           <RoleRoute allowedRoles={["admin","management","instructor","student"]}>
             <DashboardLayout>
               <CoursesRoutes />
             </DashboardLayout>
           </RoleRoute>
         </ProtectedRoute>
       }
     />
     <Route
       path="/courses/*"
       element={
         <ProtectedRoute>
           <RoleRoute allowedRoles={["admin"]}>
             <DashboardLayout>
               <CoursesRoutes />
             </DashboardLayout>
           </RoleRoute>
         </ProtectedRoute>
       }
     />

      <Route
        path="/batches/*"
        element={
          <ProtectedRoute>
            <RoleRoute allowedRoles={["admin"]}>
              <DashboardLayout>
                <CoursesRoutes />
              </DashboardLayout>
            </RoleRoute>
          </ProtectedRoute>
        }
      />
      <Route
        path="/payments"
        element={
          <ProtectedRoute>
            <RoleRoute allowedRoles={["admin","management","instructor"]}>
              <DashboardLayout>
                <CoursesRoutes />
              </DashboardLayout>
            </RoleRoute>
          </ProtectedRoute>
        }
      />
      <Route
        path="/payments/*"
        element={
          <ProtectedRoute>
            <RoleRoute allowedRoles={["admin"]}>
              <DashboardLayout>
                <CoursesRoutes />
              </DashboardLayout>
            </RoleRoute>
          </ProtectedRoute>
        }
      />
      <Route
        path="/wallets"
        element={
          <ProtectedRoute>
            <RoleRoute allowedRoles={["admin","management","instructor"]}>
              <DashboardLayout>
                <CoursesRoutes />
              </DashboardLayout>
            </RoleRoute>
          </ProtectedRoute>
        }
      />
      <Route
        path="/wallets/*"
        element={
          <ProtectedRoute>
            <RoleRoute allowedRoles={["admin"]}>
              <DashboardLayout>
                <CoursesRoutes />
              </DashboardLayout>
            </RoleRoute>
          </ProtectedRoute>
        }
      />
      <Route
        path="/registration/*"
        element={
          <ProtectedRoute>
            <RoleRoute allowedRoles={["admin","management","student","instructor"]}>
              <DashboardLayout>
                <CoursesRoutes />
              </DashboardLayout>
            </RoleRoute>
          </ProtectedRoute>
        }
      />
      <Route
        path="/registration"
        element={
          <ProtectedRoute>
            <RoleRoute allowedRoles={["admin","management","student","instructor"]}>
              <DashboardLayout>
                <CoursesRoutes />
              </DashboardLayout>
            </RoleRoute>
          </ProtectedRoute>
        }
      />
      <Route
        path="/enrollment/*"
        element={
          <ProtectedRoute>
            <RoleRoute allowedRoles={["admin", "management", "instructor", "student"]}>
              <DashboardLayout>
                <EnrollRoutes />
              </DashboardLayout>
            </RoleRoute>
          </ProtectedRoute>
        }
      />
      <Route
        path="/enrollment"
        element={
          <ProtectedRoute>
            <RoleRoute allowedRoles={["admin", "management", "instructor", "student"]}>
              <DashboardLayout>
                <EnrollRoutes />
              </DashboardLayout>
            </RoleRoute>
          </ProtectedRoute>
        }
      />
    </Routes>

    
  )
}

export default AppRoutes