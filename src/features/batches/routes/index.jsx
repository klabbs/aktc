import { Routes, Route } from "react-router-dom";
import RoleRoute from "../../../routes/role";

import MainPage from "../pages/MainPage";
import DetailPage from "../pages/DetailPage";
import CreatePage from "../pages/CreatePage";
import EditPage from "../pages/EditPage";

const BatchesRoutes = () => {
  return (
    <Routes>
      {/* PUBLIC (all allowed roles already filtered in parent route) */}
      <Route index element={<MainPage />} />
      <Route path=":id" element={<DetailPage />} />

      {/* ADMIN ONLY ROUTES */}
      <Route
        path="new"
        element={
          <RoleRoute allowedRoles={["admin"]}>
            <CreatePage />
          </RoleRoute>
        }
      />

      <Route
        path="edit/:id"
        element={
          <RoleRoute allowedRoles={["admin"]}>
            <EditPage />
          </RoleRoute>
        }
      />
    </Routes>
  );
};

export default BatchesRoutes;