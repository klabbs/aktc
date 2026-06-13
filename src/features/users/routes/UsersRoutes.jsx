import { Routes, Route } from "react-router-dom";
import UsersPage from "../pages/UsersPage";
import UserDetailsPage from "../pages/UserDetails";
import CreateUserPage from "../pages/CreateUserPage";

const UsersRoutes = () => {
  return (
    <Routes>
      <Route index element={<UsersPage />} />
      <Route path="new" element={<CreateUserPage />} />
      <Route path=":id" element={<UserDetailsPage />} />
    </Routes>
  );
};

export default UsersRoutes;