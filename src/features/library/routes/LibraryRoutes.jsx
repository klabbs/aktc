import { Routes, Route } from "react-router-dom";
import LibraryPage from "../pages/LibraryPage";
import CreateLibraryPage from "../pages/CreateLibraryPage";
import LibraryDetails from "../pages/LibraryDetails";

const LibraryRoutes = () => {
  return (
    <Routes>
      <Route index element={<LibraryPage />} />
      <Route path="new" element={<CreateLibraryPage />} />
      <Route path=":id" element={<LibraryDetails />} />
      <Route path=":id/edit" element={<LibraryDetails />} />
      
    </Routes>
  );
};

export default LibraryRoutes;