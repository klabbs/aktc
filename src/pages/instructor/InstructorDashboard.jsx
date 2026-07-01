import './instructurDashboard.css';
const InstructorDashboard = () => {
    return (
      <div>
        {/* <!-- MAIN --> */}

        <main className="main">

            <header className="topbar">

                <h1>☀️ Good morning</h1>

                <div className="top-actions">

                    <div className="search">
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <input type="text" placeholder="Search student or file..."/>
                    </div>

                    <i className="fa-regular fa-bell"></i>

                    <img src="https://i.pravatar.cc/45" alt="" className="avatar"/>

                </div>

            </header>

            <h2 className="section-title">Assigned Courses</h2>

            <div className="courses">

                <div className="course-card">
                    <span className="tag">ADVANCED</span>
                    <h3>Advanced Typography</h3>
                    <p>Systematic approach to visual hierarchy and digital media.</p>
                </div>

                <div className="course-card">
                    <span className="tag">FOUNDATIONS</span>
                    <h3>UI Design Fundamentals</h3>
                    <p>Understanding grids, colors and responsive layouts.</p>
                </div>

            </div>

            <div className="schedule">

                <h2>Today's Class Schedule</h2>

                <div className="schedule-item">
                    <strong>09:00 AM</strong>
                    <span>Advanced Typography</span>
                </div>

                <div className="schedule-item">
                    <strong>11:30 AM</strong>
                    <span>Curriculum Review Meeting</span>
                </div>

                <div className="schedule-item">
                    <strong>02:00 PM</strong>
                    <span>UI Design Fundamentals</span>
                </div>

            </div>

        </main>

        {/* <!-- RIGHT PANEL --> */}

        <aside className="rightbar">

            <div className="widget">

                <h3>ACTION CENTER</h3>

                <div className="actions">

                    <button>
                        <i className="fa-solid fa-plus"></i>
                        New Material
                    </button>

                    <button>
                        <i className="fa-regular fa-envelope"></i>
                        Send Notice
                    </button>

                </div>

            </div>

            <div className="widget">

                <h3 className="red">ATTENTION NEEDED</h3>

                <div className="alert">
                    Lucas Miller <span>Missing Project</span>
                </div>

                <div className="alert">
                    Emma Watson <span>Quiz Overdue</span>
                </div>

                <div className="alert">
                    Liam Garcia <span>Absent 3 days</span>
                </div>

            </div>

            <div className="widget">

                <h3>UPCOMING DEADLINES</h3>

                <div className="deadline">
                    <strong>14 OCT</strong>
                    <p>Project Phase Submission</p>
                </div>

                <div className="deadline">
                    <strong>18 OCT</strong>
                    <p>Mid-term Evaluations</p>
                </div>

            </div>

        </aside>

        <button className="floating-btn">
          <a href="dashboard-courses.html"></a>
        </button>

      </div>
    )
  }
  
  export default InstructorDashboard