import { useCourses } from "../hooks/useCourses";

const CourseCard = () => {
  const { courses } = usecourses();
    if(courses.success){
      const coursesList = courses.data;
      return (
       <h3>Course Name</h3>
      );
    }
  };

  export default CourseCard;