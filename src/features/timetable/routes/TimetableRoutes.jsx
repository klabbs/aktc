
import { Routes, Route } from "react-router-dom";
import TimetablePage from "../pages/TimetablePage";
// import CreateTimetablePage from "../pages/CreateTimetablePage";


const TimetableRoutes = () => {
 return (
   <Routes>
     <Route index element={<TimetablePage />} />
     {/* <Route path="new" element={<CreateTimetablePage />} /> */}
     {/* <Route path=":id" element={<TimetablePage />} /> */}
     {/* <Route path=":id/edit" element={<CreateTimetablePage />} /> */}
   </Routes>
 );
};


export default TimetableRoutes;
