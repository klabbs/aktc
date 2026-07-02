import './studentDashboard.css';
const StudentDashboard = () => {
    return (
      <div>
            {/* <!-- MAIN --> */}

    <main className="main">

        <header className="topbar">

            <h2>Dashboard Overview</h2>

            <div className="top-actions">

                <div className="search">
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <input type="text" placeholder="Search courses..."/>
                </div>

                <i className="fa-regular fa-bell"></i>
                <i className="fa-regular fa-id-card"></i>

                <img src="https://i.pravatar.cc/45" className="avatar"/>

            </div>

        </header>

        {/* <!-- ALERT --> */}

        <div className="alert-banner">

            <div>
                <strong>Upcoming Tuition Payment</strong>
                <p>A payment of ₦1,250.00 is due in 4 days.</p>
            </div>

            <button>Pay Now</button>

        </div>

        {/* <!-- WELCOME --> */}

        <div className="welcome">

            <h1>Welcome back, Basit 👋</h1>

            <p>
                You have 2 classes today.
                Your next one starts in 45 minutes.
            </p>

        </div>

        {/* <!-- STATS --> */}

        <div className="stats">

            <div className="stat-card">
                <h4>Courses Enrolled</h4>
                <h2>06</h2>
            </div>

            <div className="stat-card">
                <h4>Wallet Balance</h4>
                <h2>₦245.50</h2>
            </div>

            <div className="stat-card">
                <h4>Attendance</h4>
                <h2>94.2%</h2>
            </div>

        </div>

        {/* <!-- CONTENT --> */}

        <div className="content-grid">

            <div className="session-card">

                <span>LIVE SESSION</span>

                <h2>
                    Advanced Typography &
                    Systems
                </h2>

                <p>10:30 AM - 12:00 PM</p>

                <p>Dr. Helena Brauer</p>

                <button>
                    Join Online Session →
                </button>

            </div>

            <div className="activity-card">

                <div className="activity-header">
                    <h3>Recent Activity</h3>
                    <a href="#">View All</a>
                </div>

                <div className="activity-item">
                    Assignment Submitted
                </div>

                <div className="activity-item">
                    Grade Published
                </div>

                <div className="activity-item">
                    New Discussion Post
                </div>

            </div>

        </div>

        {/* <!-- RESOURCES --> */}

        <h3 className="resource-title">
            QUICK RESOURCES
        </h3>

        <div className="resources">

            <div className="resource">
                Study Guide v4
            </div>

            <div className="resource">
                Session Records
            </div>

            <div className="resource">
                e-Library Access
            </div>

            <div className="resource">
                Tech Support
            </div>

        </div>

    </main>

      </div>
    )
}
  
export default StudentDashboard