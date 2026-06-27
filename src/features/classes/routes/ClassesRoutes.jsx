import { Routes, Route } from "react-router-dom";
import ClassesPage from "../pages/ClassesPage";
import ClassPage from "../pages/ClassPage";
import CreateClassPage from "../pages/CreateClassPage";


const ClassesRoutes = () => {
  return (
    <Routes>
      <Route index element={<ClassesPage />} />
      <Route path="new" element={<CreateClassPage />} />
      <Route path=":id" element={<ClassPage />} />
      <Route path=":id/edit" element={<ClassPage />} />
    </Routes>
  );
};

export default ClassesRoutes;