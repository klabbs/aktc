import { Routes, Route } from "react-router-dom";
import CoursesPage from "../pages/CoursesPage";
import CoursePage from "../pages/CoursesPage";
import CreateCoursePage from "../pages/CreateCoursePage";


const CoursesRoutes = () => {
 return (
   <Routes>
     <Route index element={<CoursesPage />} />
     <Route path="new" element={<CreateCoursePage />} />
     <Route path=":id" element={<CoursePage />} />
     <Route path=":id/edit" element={<CoursePage />} />
   </Routes>
 );
};


export default CoursesRoutes;
