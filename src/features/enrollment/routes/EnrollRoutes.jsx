
import { Routes, Route } from "react-router-dom";
import EnrollPage from "../pages/EnrollPage";
import CreateEnrollmentPage from "../pages/CreatePage"


const EnrollRoutes = () => {
 return (
   <Routes>
     <Route index element={<EnrollPage />} />
     <Route path="new" element={<CreateEnrollmentPage />} />
     <Route path=":id" element={<EnrollPage />} />
     <Route path=":id/edit" element={<EnrollPage />} />
   </Routes>
 );
};

export default EnrollRoutes;