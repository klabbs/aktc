import { Routes, Route } from "react-router-dom";
import TicketPage from "../pages/TicketPage";
import TicketDetailsPage from "../pages/TicketDetails";
import CreateTicketPage from "../pages/CreateTicketPage";

const TicketRoutes = () => {
  return (
    <Routes>
      <Route index element={<TicketPage />} />
      <Route path="new" element={<CreateTicketPage />} />
      <Route path=":id" element={<TicketDetailsPage />} />
    </Routes>
  );
};

export default TicketRoutes;