import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Gradebook from '../pages/Gradebook';
import Attendance from '../pages/Attendance';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Gradebook />} />
        <Route path="/gradebook" element={<Gradebook />} />
        <Route path="/attendance" element={<Attendance />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;