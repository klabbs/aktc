import { Routes, Route } from "react-router-dom";
import RoleRoute from "../../../routes/role";

import MainPage from "../pages/MainPage";
import DetailPage from "../pages/DetailPage";
import CreatePage from "../pages/CreatePage";

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
        path=":id/edit"
        element={
          <RoleRoute allowedRoles={["admin"]}>
            <CreatePage />
          </RoleRoute>
        }
      />
    </Routes>
  );
};

export default BatchesRoutes;