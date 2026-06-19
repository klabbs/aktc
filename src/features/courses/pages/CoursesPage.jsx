import styles from './Courses.module.css';
import CourseCard from "../components/CourseCard";
import useDocumentTitle from "../../../hooks/useDocumentTitle";

const CoursesPage = () => {
  useDocumentTitle("Courses | AKTC");

  return (
    <>
      <h1>Courses</h1>

      <CourseTable />
    </>
  );
};

export default CoursesPage