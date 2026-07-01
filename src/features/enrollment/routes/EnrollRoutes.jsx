
import { Routes, Route } from "react-router-dom";
import EnrollPage from "../pages/EnrollPage";


const EnrollRoutes = () => {
 return (
   <Routes>
     <Route index element={<EnrollPage />} />
     {/* <Route path="new" element={<CreateEnrollPage />} /> */}
     <Route path=":id" element={<EnrollPage />} />
     <Route path=":id/edit" element={<EnrollPage />} />
   </Routes>
 );
};

export default EnrollRoutes;