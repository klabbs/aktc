import { Routes, Route } from "react-router-dom";
import GradebookPage from "../pages/GradebookPage";
import CreateGradebookPage from "../pages/CreateGradebookPage";


const GradebookRoutes = () => {
 return (
   <Routes>
     <Route index element={<GradebookPage />} />
     <Route path="new" element={<CreateGradebookPage />} />
     {/* <Route path=":id" element={<GradebookPage />} /> */}
     {/* <Route path=":id/edit" element={<CreateGradebookPage />} /> */}
   </Routes>
 );
};


export default GradebookRoutes;

