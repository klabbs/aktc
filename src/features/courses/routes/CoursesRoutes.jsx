import { Routes, Route } from "react-router-dom";
import RoleRoute from "../../../routes/role";

import CoursesPage from "../pages/CoursesPage";
import CoursePage from "../pages/CoursePage";
import CreateCoursePage from "../pages/CreateCoursePage";
import EditCoursePage from "../pages/EditCoursePage";

const CoursesRoutes = () => {
  return (
    <Routes>
      {/* PUBLIC (all allowed roles already filtered in parent route) */}
      <Route index element={<CoursesPage />} />
      <Route path=":id" element={<CoursePage />} />

      {/* ADMIN ONLY ROUTES */}
      <Route
        path="new"
        element={
          <RoleRoute allowedRoles={["admin"]}>
            <CreateCoursePage />
          </RoleRoute>
        }
      />

      <Route
        path=":id/edit"
        element={
          <RoleRoute allowedRoles={["admin"]}>
            <EditCoursePage />
          </RoleRoute>
        }
      />
    </Routes>
  );
};

export default CoursesRoutes;