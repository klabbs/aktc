import { Routes, Route } from "react-router-dom";
import EventsPage from "../pages/EventsPage";
import EventDetails from "../pages/EventDetails";
import CreateEventPage from "../pages/CreateEventsPage";
import EditEventPage from "../pages/EditEventPage";

const EventsRoutes = () => {
  return (
    <Routes>
      <Route index element={<EventsPage />} />
      <Route path="new" element={<CreateEventPage />} />
      <Route path=":id" element={<EventDetails />} />
      <Route path=":id/edit" element={<EditEventPage />} />
    </Routes>
  );
};

export default EventsRoutes;