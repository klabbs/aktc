import  "./Ticket.css";
import TicketTable from "../components/TicketTable";
import TicketForm from "../components/TicketForm";

const TicketPage = () => {
  return (
    <>
      <main className="main">

          
            <div className="topbar">
                <div>
                    <h2>Gradebook</h2>
                    <p>Advanced Calculus • Section B</p>
                </div>

                <div className="top-right">
                    <i className="fa-regular fa-bell"></i>
                    <span>Elena S.</span>
                    <img src="https://i.pravatar.cc/40?img=12" alt=""/>
                </div>
            </div>

            
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

               
                <TicketTable />

                
                <div className="right-panel">

                    
                    <TicketForm />

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

export default TicketPage