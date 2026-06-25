import { Routes, Route } from "react-router-dom";
import CoursesPage from "../pages/CoursesPage";
//import CourseDetailsPage from "../pages/CourseDetails";
import CreateCoursePage from "../pages/CreateCoursePage";

const CoursesRoutes = () => {
  return (
    <Routes>
      <Route index element={<CoursesPage />} />
      <Route path="new" element={<CreateCoursePage />} />
     // {/* <Route path=":id" element={<CourseDetailsPage />} /> */}
    </Routes>
  );
};

export default CoursesRoutes;