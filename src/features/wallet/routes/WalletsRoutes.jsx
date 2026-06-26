import { Routes, Route } from "react-router-dom";
import RoleRoute from "../../../routes/role";
import WalletsPage from "../pages/WalletsPage";
import WalletPage from "../pages/WalletPage";
import CreateWalletPage from "../pages/CreateWalletPage";
import EditWalletPage from "../pages/EditWalletPage";

const WalletsRoutes = () => {
  return (
    <Routes>
      <Route index element={<WalletsPage />} />

      <Route
        path="new"
        element={
          <RoleRoute allowedRoles={["admin", "instructor", "management", "student"]}>
            <CreateWalletPage />
          </RoleRoute>
        }
      />

      <Route
        path=":id/edit"
        element={
          <RoleRoute allowedRoles={["admin", "instructor", "management", "student"]}>
            <EditWalletPage />
          </RoleRoute>
        }
      />

      <Route path=":id" element={<WalletPage />} />
    </Routes>
  );
};

export default WalletsRoutes;