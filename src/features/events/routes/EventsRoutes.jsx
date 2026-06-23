import { Routes, Route } from "react-router-dom";
// import EventsPage from "../pages/EventsDetailsPage";
// import CreateEventsPage from "../pages/CreateEventsPage";


const EventsRoutes = () => {
 return (
   <Routes>
     <Route index element={<EventsPage />} />
     {/* <Route path="new" element={<CreateEventsPage />} /> */}
     {/* <Route path=":id" element={<EventsPage />} /> */}
     {/* <Route path=":id/edit" element={<EventsPage />} /> */}
   </Routes>
 );
};


export default EventsRoutes;

