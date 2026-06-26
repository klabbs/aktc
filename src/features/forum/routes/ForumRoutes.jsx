import { Routes, Route } from "react-router-dom";
import ForumsPage from "../pages/ForumsPage";
import ForumPage from "../pages/ForumPage";
// import CreateForumPage from "../pages/CreateForumPage";


const ForumRoutes = () => {
 return (
   <Routes>
     <Route index element={<ForumPage />} />
     {/* <Route path="new" element={<CreateForumPage />} /> */}
     <Route path=":id" element={<ForumPage />} />
     <Route path=":id/edit" element={<ForumPage />} />
   </Routes>
 );
};


export default ForumRoutes;

