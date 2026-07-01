import { Routes, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";

import DashboardPage from "../pages/dashboard/DashboardPage";

import MainLayout from "../layouts/MainLayout";
import DashboardLayout from "../layouts/DashboardLayout";

import ProtectedRoute from "./protected";
import RoleRoute from "./role";

import AdminDashboard from "../pages/admin/AdminDashboard";
import InstructorDashboard from "../pages/instructor/InstructorDashboard";
import StudentDashboard from "../pages/student/StudentDashboard";

// Feature Routes
import UsersRoutes from "../features/users/routes/UsersRoutes";
import PaymentsRoutes from "../features/payments/routes/PaymentsRoutes"
import WalletsRoutes from "../features/wallets/routes/WalletsRoutes"
import CoursesRoutes from "../features/courses/routes/CoursesRoutes";
import RegistrationRoutes from "../features/registration/routes/RegistrationRoutes";
import BatchRoutes from "../features/batches/routes";
import EnrollRoutes from "../features/enrollment/routes/EnrollRoutes";
import ClassesRoutes from "../features/classes/routes/ClassesRoutes"
import TimetableRoutes from "../features/timetable/routes/TimetableRoutes"
import AttendanceRoutes from "../features/attendance/routes/AttendanceRoutes"
import TicketsRoutes from "../features/tickets/routes/TicketRoutes"
import AnnouncementRoutes from "../features/announcement/routes/AnnouncementRoutes"
import GradebookRoutes from "../features/gradebook/routes/GradebookRoutes"
import EventsRoutes from "../features/events/routes/EventsRoutes"
import ForumsRoutes from "../features/forum/routes/ForumRoutes"
import LibraryRoutes from "../features/library/routes/LibraryRoutes"
import ReportRoutes from "../features/library/routes/LibraryRoutes"

    
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

      <Route path="/login" element={<LoginPage />} />

      <Route path="/register" element={<RegisterPage />} />

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

      {/* ROLE-BASED ROUTES */}
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

      {/* FEATURE ROUTES */}

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
        path="/courses/*"
        element={
          <ProtectedRoute>
            <RoleRoute
              allowedRoles={[
                "admin",
                "management",
                "instructor",
                "student",
              ]}
            >
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
            <RoleRoute
              allowedRoles={[
                "admin",
                "management",
                "instructor",
                "student",
              ]}
            >
              <DashboardLayout>
                <BatchRoutes />
              </DashboardLayout>
            </RoleRoute>
          </ProtectedRoute>
        }
      />

       <Route
        path="/registration/*"
        element={
          <ProtectedRoute>
            <RoleRoute
              allowedRoles={[
                "admin",
                "management",
                "student",
              ]}
            >
              <DashboardLayout>
                <RegistrationRoutes />
              </DashboardLayout>
            </RoleRoute>
          </ProtectedRoute>
        }
      />

      <Route
        path="/payments/*"
        element={
          <ProtectedRoute>
            <RoleRoute allowedRoles={["admin", "management", "students"]}>
              <DashboardLayout>
                <PaymentsRoutes />
              </DashboardLayout>
            </RoleRoute>
          </ProtectedRoute>
        }
      />

     <Route
       path="/wallets/*"
       element={
         <ProtectedRoute>
           <RoleRoute
              allowedRoles={[
                "admin",
                "management",
                "student",
              ]}
            >
             <DashboardLayout>
               <WalletsRoutes />
             </DashboardLayout>
           </RoleRoute>
         </ProtectedRoute>
        }
      /> 

      <Route
        path="/enrollment/*"
        element={
          <ProtectedRoute>
            <RoleRoute
              allowedRoles={[
                "admin",
                "management",
                "instructor",
                "student",
              ]}
            >
              <DashboardLayout>
                <EnrollRoutes />
              </DashboardLayout>
            </RoleRoute>
          </ProtectedRoute>
        }
      />

      <Route
        path="/classes/*"
        element={
          <ProtectedRoute>
            <RoleRoute allowedRoles={[
              "admin",
              "management",
              "instructor",
              "student"
            ]}>
            <DashboardLayout>
              <ClassesRoutes />
            </DashboardLayout>
          </RoleRoute>
        </ProtectedRoute>
       }
      />

      <Route
        path="/timetable/*"
        element={
          <ProtectedRoute>
            <RoleRoute allowedRoles={[
              "admin",
              "management",
              "instructor",
              "student"
            ]}>
            <DashboardLayout>
              <TimetableRoutes />
            </DashboardLayout>
          </RoleRoute>
        </ProtectedRoute>
       }
      />

      <Route
        path="/attendance/*"
        element={
          <ProtectedRoute>
            <RoleRoute allowedRoles={[
              "admin",
              "management",
              "instructor",
              "student"
            ]}>
            <DashboardLayout>
              <AttendanceRoutes />
            </DashboardLayout>
          </RoleRoute>
        </ProtectedRoute>
       }
      />

      <Route
        path="/tickets/*"
        element={
          <ProtectedRoute>
            <RoleRoute
              allowedRoles={[
                "admin",
                "management",
                "instructor",
                "student",
              ]}
            >
              <DashboardLayout>
                <TicketsRoutes />
              </DashboardLayout>
            </RoleRoute>
          </ProtectedRoute>
        }
      />

      <Route
       path="/gradebook/*"
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
        path="/events/*"
        element={
          <ProtectedRoute>
            <RoleRoute allowedRoles={["admin","management","instructor","student"]}>
              <DashboardLayout>
                <EventsRoutes />
              </DashboardLayout>
            </RoleRoute>
          </ProtectedRoute>
        }
      />

     <Route
       path="/forums/*"
       element={
         <ProtectedRoute>
           <RoleRoute
              allowedRoles={[
                "admin",
                "management",
                "instructor",
                "student",
              ]}
            >
             <DashboardLayout>
               <ForumsRoutes />
             </DashboardLayout>
           </RoleRoute>
         </ProtectedRoute>
       }
     />
     
     <Route
        path="/anouncements/*"
        element={
          <ProtectedRoute>
            <RoleRoute
              allowedRoles={[
                "admin",
                "management",
                "instructor",
                "student",
              ]}
            >
              <DashboardLayout>
                <AnnouncementRoutes />
              </DashboardLayout>
            </RoleRoute>
          </ProtectedRoute>
        }
      />

      <Route
        path="/library/*"
        element={
          <ProtectedRoute>
            <RoleRoute
              allowedRoles={[
                "admin",
                "management",
                "instructor",
                "student",
              ]}
            >
              <DashboardLayout>
                <LibraryRoutes />
              </DashboardLayout>
            </RoleRoute>
          </ProtectedRoute>
        }
      />

      <Route
        path="/reports/*"
        element={
          <ProtectedRoute>
            <RoleRoute
              allowedRoles={[
                "admin",
                "management",
                "instructor",
                "student",
              ]}
            >
              <DashboardLayout>
                <ReportRoutes />
              </DashboardLayout>
            </RoleRoute>
          </ProtectedRoute>
        }
      />

    </Routes>
  );
};

export default AppRoutes;