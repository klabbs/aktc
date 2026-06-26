import { Routes, Route } from "react-router-dom";
import RoleRoute from "../../../routes/role";

import PaymentsPage from "../pages/PaymentsPage";
import PaymentPage from "../pages/PaymentPage";
import CreatePaymentPage from "../pages/CreatePaymentPage";
import EditPaymentPage from "../pages/EditPaymentPage";

const PaymentsRoutes = () => {
  return (
    <Routes>
      <Route index element={<PaymentsPage />} />

      <Route
        path="new"
        element={
          <RoleRoute allowedRoles={["admin"]}>
            <CreatePaymentPage />
          </RoleRoute>
        }
      />

      <Route
        path=":id/edit"
        element={
          <RoleRoute allowedRoles={["admin"]}>
            <EditPaymentPage />
          </RoleRoute>
        }
      />

      <Route path=":id" element={<PaymentPage />} />

      <Route path="*" element={<p>Page not found</p>} />
    </Routes>
  );
};

export default PaymentsRoutes;