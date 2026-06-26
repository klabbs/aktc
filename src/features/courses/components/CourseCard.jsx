import '../pages/Courses.css';
import { useCourses } from "../hooks/useCourses";
import { Link } from "react-router-dom";

const CourseCard = () => {
  const { courses } = useCourses();
    if(courses.success){
      const coursesList = courses.data;
      return (
        <div className="course-grid">
          {coursesList.map((course) => (
            <Link to={course._id} key={course._id}>
            <div className="course-card">
              {/* <img src="https://picsum.photos/400/250?1"/> */}
              {/* different-image-everytime */}
              {/* <img
                src={`https://picsum.photos/400/250?random=${course.id}`}
                alt={course.title}
              /> */}
              {/* same-image-everytime */}
              <img
                src={`https://picsum.photos/seed/${course._id}/400/250`}
                alt={course.title}
              />
                <h3>{course.title}</h3>

                <small>12 Weeks • ★ 4.9</small>

                <p>
                  Learn user-centered design principles and
                  high-fidelity prototyping.
                </p>

                <div className="price-row">
                  <h4>₦599</h4>
                  <button>Enroll</button>
                </div>
            </div> 
            </Link>      
          ))}
          
        </div>
     
      );
    }
  };

  export default CourseCard;