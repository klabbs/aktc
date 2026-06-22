import { Routes, Route } from "react-router-dom";
import BatchPage from "../pages/BatchPage";


const BatchRoutes = () => {
 return (
   <Routes>
     <Route index element={<BatchPage />} />
     {/* <Route path="new" element={<CreateBatchPage />} /> */}
     <Route path=":id" element={<BatchPage />} />
     <Route path=":id/edit" element={<BatchPage />} />
   </Routes>
 );
};


export default BatchRoutes;
