import { Routes, Route } from "react-router-dom";
import BatchPage from "../pages/BatchPage";
import BatchForm from "../components/BatchForm";

const BatchRoutes = () => {
  return (
    <Routes>
      <Route index element={<BatchPage />} />
      <Route path="create" element={<BatchForm />} />
    </Routes>
  );
};

export default BatchRoutes;