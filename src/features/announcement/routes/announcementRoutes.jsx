import { Routes, Route } from "react-router-dom";
import AnnouncementsPage from "../pages/AnnouncementsPage";
import CreateAnnouncementPage from "../pages/CreateAnnouncementPage";
import AnnouncementDetails from "../pages/AnnouncementDetails";

const AnnouncementRoutes = () => {
  return (
    <Routes>
      <Route index element={<AnnouncementsPage />} />
      <Route path="new" element={<CreateAnnouncementPage />} />
      <Route path=":id" element={<AnnouncementDetails />} />
      <Route path=":id/edit" element={<AnnouncementDetails />} />
    </Routes>
  );
};

export default AnnouncementRoutes;