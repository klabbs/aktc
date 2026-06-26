import AnnouncementTable from "../components/AnnouncementTable";
import useDocumentTitle from "../../../hooks/UseDocumentTitle";

const AnnouncementsPage = () => {
  useDocumentTitle("Announcements | AKTC");

  return (
    <>
      {/* Top Bar */}
      <div className="topbar">
        <div>
          <h2>Announcements</h2>
          <p>Advanced Calculus • Section B</p>
        </div>

        <div className="top-right">
          <i className="fa-regular fa-bell"></i>
          <span>Elena S.</span>
          <img src="https://i.pravatar.cc/40?img=12" alt="User avatar" />
        </div>
      </div>

      {/* Stats */}
      <div className="stats">
        <div className="card">
          <p>Class Average</p>
          <h2>84.2%</h2>
          <small className="green">+2.1%</small>
        </div>

        <div className="card">
          <p>Pending Reviews</p>
          <h2>12</h2>
          <small>Assignments</small>
        </div>

        <div className="card">
          <p>Top Performer</p>
          <div className="student">
            <div className="avatar">J</div>
            <span>Julian Doe</span>
          </div>
        </div>

        <div className="card">
          <p>Next Milestone</p>
          <h4>Final Exam</h4>
          <small>In 14 Days</small>
        </div>
      </div>

      <div className="content">
        {/* Table */}
        <div className="submissions">
          <h3>Recent Student Submissions</h3>

          <div className="row">
            <img src="https://i.pravatar.cc/50?img=8" alt="Student avatar" />
            <span>Alex Rivera</span>
            <span className="status submitted">Submitted</span>
            <strong>92/100</strong>
          </div>

          <div className="row">
            <img src="https://i.pravatar.cc/50?img=9" alt="Student avatar" />
            <span>Sarah Jenkins</span>
            <span className="status grading">Grading</span>
            <strong>--/100</strong>
          </div>

          <div className="row">
            <img src="https://i.pravatar.cc/50?img=10" alt="Student avatar" />
            <span>Liam O'Connell</span>
            <span className="status submitted">Submitted</span>
            <strong>78/100</strong>
          </div>

          <div className="row">
            <img src="https://i.pravatar.cc/50?img=11" alt="Student avatar" />
            <span>Maya Patel</span>
            <span className="status overdue">Overdue</span>
            <strong>0/100</strong>
          </div>
        </div>

        {/* Right Side */}
        <div className="right-panel">
          <div className="grade-card">
            <h3>Quick Grade Entry</h3>

            <input type="text" placeholder="Sarah Jenkins" />
            <input type="number" placeholder="Enter score" />

            <textarea placeholder="Great work on the derivatives section..."></textarea>

            <button>Submit Grade</button>
          </div>

          <div className="insights">
            <h4>Assignment Insights</h4>

            <p>Completion Rate <span>88%</span></p>

            <div className="progress">
              <div className="fill"></div>
            </div>

            <p>Time to Grade (Avg) <strong>4.2 hrs</strong></p>
          </div>
        </div>
      </div>

      <h1>Announcements</h1>
      <AnnouncementTable />
    </>
  );
};

export default AnnouncementsPage;
