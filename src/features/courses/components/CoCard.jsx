import '../pages/Courses.css';
import { useCourses } from "../hooks/useCourses";
import { Link } from "react-router-dom";

const CoCard = ({ linkBase = "/courses" }) => {
  const { courses } = useCourses();

//   if (courses.success) {
//     const coursesList = courses.data;

    return (
        <h4>hhh</h4>
        );
  }

//   return null;
// };

export default CoCard;