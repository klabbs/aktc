import styles from './GradebookPage.module.css';
// import GradebookTable from "../components/GradebookTable";
import useDocumentTitle from "../../../hooks/useDocumentTitle";

const GradebookPage = () => {
  useDocumentTitle("Gradebook | AKTC");

  return (
    <>
        <main className="main">

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

               
                <div className="submissions">

                    <h3>Recent Student Submissions</h3>

                    <div className="row">
                        <img src="https://i.pravatar.cc/50?img=8"/>
                        <span>Alex Rivera</span>
                        <span className="status submitted">Submitted</span>
                        <strong>92/100</strong>
                    </div>

                    <div className="row">
                        <img src="https://i.pravatar.cc/50?img=9" />
                        <span>Sarah Jenkins</span>
                        <span className="status grading">Grading</span>
                        <strong>--/100</strong>
                    </div>

                    <div className="row">
                        <img src="https://i.pravatar.cc/50?img=10" />
                        <span>Liam O'Connell</span>
                        <span className="status submitted">Submitted</span>
                        <strong>78/100</strong>
                    </div>

                    <div className="row">
                        <img src="https://i.pravatar.cc/50?img=11" />
                        <span>Maya Patel</span>
                        <span className="status overdue">Overdue</span>
                        <strong>0/100</strong>
                    </div>

                </div>

               
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

        </main>
    </>
  );
};

export default GradebookPage