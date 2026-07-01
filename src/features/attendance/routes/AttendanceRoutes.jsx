import { Routes, Route } from "react-router-dom";
import Attendance from "../../../pages/Attendance";

const AttendanceRoutes = () => {
  return (
    <Routes>
      <Route index element={<Attendance />} />
    </Routes>
  );
};

export default AttendanceRoutes;
