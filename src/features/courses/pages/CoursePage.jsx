// import CourseTable from "../components/CourseTable";
import "../styles/coursePage.css"
import { useCourse } from "../hooks/useCourse";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const CoursePage = () => {
  const navigate = useNavigate();
  const { user } = useSelector(
    (state) => state.auth
  );

  const { course, loading } = useCourse();
  
  if (loading) return <p>Loading...</p>;
  return (
    <>
      <main className="main-content">
        <div className="overview-grid">

          <div className="overview-card">

              <div className="card-header">
                  <div>
                      <h2>{course.title}</h2>
                      <p>{course.description}</p>
                      <hr/>
                      {user && user.role === "admin" && (
                        <button
                          className="add-course-btn"
                          onClick={() => navigate(`/courses/${course._id}/edit`)}
                        >
                          <i className="fas fa-pencil"></i>
                          Edit Course
                        </button>
                      )}
                      
                  </div>

                  <div className="tabs">
                      <span className="active-tab">Active</span>
                      <span>Planned</span>
                      <span>Archived</span>
                  </div>
              </div>

          
          </div>

          <div className="stats-column">

              <div className="mini-stat">
                  <h2>12,482</h2>
                  <p>Total Enrolled Students</p>
                  <span className="green">+12%</span>
              </div>

              <div className="mini-stat">
                  <h2>156</h2>
                  <p>Active Course Modules</p>
                  <span>42 Faculty</span>
              </div>

          </div>

          </div>
      </main>
    </>
  );
};

export default CoursePage;