import './Courses.css';
import CourseCard from "../components/CourseCard";
import useDocumentTitle from "../../../hooks/useDocumentTitle";

const CoursesPage = () => {
  useDocumentTitle("Courses | AKTC");
  return (
    <>
      <section className="catalog">

        <h1>Course Catalog</h1>

        <p>
            Elevate your skills with our premium academy paths.
        </p>

        <div className="tabs">
            <button className="active">All Courses</button>
            <button>UI/UX Design</button>
            <button>Full Stack Dev</button>
            <button>Data Science</button>
            <button>Digital Marketing</button>
        </div>

        <div className="course-gridxS">

          <CourseCard />
        </div>
        
        <div className="promo-section">

                <div className="promo-card">

                    <div>

                        <span>NEW PATHWAY</span>

                        <h2>
                            Mobile App Development
                            with Flutter
                        </h2>

                        <p>
                            Build cross-platform applications
                            using Flutter.
                        </p>

                        <div className="promo-buttons">
                            <button>View Syllabus</button>
                            <button className="purple">
                                Join Cohort
                            </button>
                        </div>

                    </div>

                </div>

                <div className="membership">

                    <i className="fa-solid fa-desktop"></i>

                    <h3>Annual Membership</h3>

                    <p>
                        Unlock all premium courses.
                    </p>

                    <button>
                        Learn More
                    </button>

                </div>

            </div>
      </section>
    </>
  );
};

export default CoursesPage