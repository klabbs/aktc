import { Routes, Route } from "react-router-dom";
import RoleRoute from "../../../routes/role";
import CoursesPage from "../pages/CoursesPage";
import CoursePage from "../pages/CoursePage";
import CreateCoursePage from "../pages/CreateCoursePage";
import EditCoursePage from "../pages/EditCoursePage";

const CoursesRoutes = () => {
  return (
    <Routes>
      {/* Everyone can view */}
      <Route index element={<CoursesPage />} />
      <Route path=":id" element={<CoursePage />} />

      {/* Admin only */}
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
    // <Routes>
    //   <Route index element={<CoursesPage />} />
    //   <Route path="new" element={<CreateCoursePage />} />
    //   <Route path=":id" element={<CoursePage />} />
    //   <Route path=":id/edit" element={<CoursePage />} />
    // </Routes>
  );
};

export default CoursesRoutes;