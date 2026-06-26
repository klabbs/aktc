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
import TicketRoutes from "../features/tickets/routes/TicketRoutes";
import CoursesRoutes from "../features/courses/routes/CoursesRoutes"
import GradebookRoutes from "../features/gradebook/routes/GradebookRoutes"
import EventsRoutes from "../features/events/routes/EventsRoutes"
import ForumsRoutes from "../features/forum/routes/ForumRoutes"
import WalletsRoutes from "../features/wallets/routes/WalletsRoutes"
import TimetableRoutes from "../features/timetable/routes/TimetableRoutes"
import PaymentsRoutes from "../features/payments/routes/PaymentsRoutes"
import ClassesRoutes from "../features/classes/routes/ClassesRoutes"

    
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
        path="/admin/tickets/*"
        element={
          <ProtectedRoute>
            <RoleRoute allowedRoles={["admin", "instructor"]}>
              <DashboardLayout>
                <TicketRoutes />
              </DashboardLayout>
            </RoleRoute>
          </ProtectedRoute>
        }
      />
       path="/gradebook"
       element={
         <ProtectedRoute>
           <RoleRoute allowedRoles={["admin","management","instructor","student"]}>
             <DashboardLayout>
               <GradebookRoutes />
             </DashboardLayout>
           </RoleRoute>
         </ProtectedRoute>
       }
     />
     <Route
       path="/gradebook/:id"
       element={
         <ProtectedRoute>
           <RoleRoute allowedRoles={["admin","management","instructor","student"]}>
             <DashboardLayout>
               <GradebookRoutes />
             </DashboardLayout>
           </RoleRoute>
         </ProtectedRoute>
       }
     />
     <Route
       path="/gradebook/*"
       element={
         <ProtectedRoute>
           <RoleRoute allowedRoles={["admin"]}>
             <DashboardLayout>
               <GradebookRoutes />
             </DashboardLayout>
           </RoleRoute>
         </ProtectedRoute>
       }
     />

      <Route
       path="/payments"
       element={
         <ProtectedRoute>
           <RoleRoute allowedRoles={["admin","management","instructor","student"]}>
             <DashboardLayout>
               <PaymentsRoutes />
             </DashboardLayout>
           </RoleRoute>
         </ProtectedRoute>
       }
     />
     <Route
       path="/payments/:id"
       element={
         <ProtectedRoute>
           <RoleRoute allowedRoles={["admin","management","instructor","student"]}>
             <DashboardLayout>
               <PaymentsRoutes />
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
               <PaymentsRoutes />
             </DashboardLayout>
           </RoleRoute>
         </ProtectedRoute>
       }
     />


    <Route
       path="/timetables"
       element={
         <ProtectedRoute>
           <RoleRoute allowedRoles={["admin","management","instructor","student"]}>
             <DashboardLayout>
               <TimetableRoutes />
             </DashboardLayout>
           </RoleRoute>
         </ProtectedRoute>
       }
     />
     <Route
       path="/timetables/:id"
       element={
         <ProtectedRoute>
           <RoleRoute allowedRoles={["admin","management","instructor","student"]}>
             <DashboardLayout>
               <TimetableRoutes />
             </DashboardLayout>
           </RoleRoute>
         </ProtectedRoute>
       }
     />
     <Route
       path="/timetables/*"
       element={
         <ProtectedRoute>
           <RoleRoute allowedRoles={["admin"]}>
             <DashboardLayout>
               <TimetableRoutes />
             </DashboardLayout>
           </RoleRoute>
         </ProtectedRoute>
       }
     />


    <Route
       path="/wallets"
       element={
         <ProtectedRoute>
           <RoleRoute allowedRoles={["admin","management","instructor","student"]}>
             <DashboardLayout>
               <WalletsRoutes />
             </DashboardLayout>
           </RoleRoute>
         </ProtectedRoute>
       }
     />
     <Route
       path="/wallets/:id"
       element={
         <ProtectedRoute>
           <RoleRoute allowedRoles={["admin","management","instructor","student"]}>
             <DashboardLayout>
               <WalletsRoutes />
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
               <WalletsRoutes />
             </DashboardLayout>
           </RoleRoute>
         </ProtectedRoute>
       }
     />

    <Route
       path="/forums"
       element={
         <ProtectedRoute>
           <RoleRoute allowedRoles={["admin","management","instructor","student"]}>
             <DashboardLayout>
               <ForumsRoutes />
             </DashboardLayout>
           </RoleRoute>
         </ProtectedRoute>
       }
     />
     <Route
       path="/forums/:id"
       element={
         <ProtectedRoute>
           <RoleRoute allowedRoles={["admin","management","instructor","student"]}>
             <DashboardLayout>
               <ForumsRoutes />
             </DashboardLayout>
           </RoleRoute>
         </ProtectedRoute>
       }
     />
     <Route
       path="/forums/*"
       element={
         <ProtectedRoute>
           <RoleRoute allowedRoles={["admin"]}>
             <DashboardLayout>
               <ForumsRoutes />
             </DashboardLayout>
           </RoleRoute>
         </ProtectedRoute>
       }
     />



    </Routes>

    
  )
}

export default AppRoutes