import useDocumentTitle from "../../../hooks/UseDocumentTitle";
import EnrollForm from "../components/form";
import { useEnrollment } from "../hooks";
import { useNavigate, useParams } from "react-router-dom";

const EnrollPage = () => {
  useDocumentTitle("Enrollment | AKTC");
  const navigate = useNavigate();
  const { enrollment, loading, error } = useEnrollment();
  console.log("enrollment",enrollment);
  return (

  <div> <main className="main">

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

                    <h3>Recent enrollment</h3>
                    {enrollment?.map((data) => (
                        <div className="row" key={data._id}>
                            <img 
                            src={`https://api.dicebear.com/10.x/shapes/svg?seed=${data._id}`}
                            />
                            <span className="mr-5">
                                -{data.user}<br/>
                                <strong>{data.user.name}</strong>
                            </span>
                            <span className="status overdue"><strong>{data.status}</strong></span>
                        </div>
                     ))}
                </div>

               
                <div className="right-panel">

                    <div className="grade-card">
                        <h3>Add New Batch Details</h3>

                        <button onClick={() => navigate(`new`)}>Add Enrollment</button>
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
    </div>
  );
};

export default EnrollPage;