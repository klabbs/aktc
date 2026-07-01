import './adminDashboard.css';
const AdminDashboard = () => {
    return (
      <div>
        <main className="main">

          {/* <!-- Topbar --> */}
          <div className="topbar">
              <div className="search-box">
                  <i className="fas fa-search"></i>
                  <input type="text" placeholder="Global search..."/>
              </div>

              <div className="top-icons">
                  <i className="fas fa-bell"></i>
                  <i className="fas fa-gear"></i>
                  <img src="https://i.pravatar.cc/40" alt=""/>
              </div>
          </div>

          <div className="heading-row">
              <div>
                  <h1>Administration Hub</h1>
                  <p>Global system oversight and access control.</p>
              </div>

              <div className="action-buttons">
                  <button className="secondary-btn">Export Report</button>
                  <button className="primary-btn">+ New Sub-Admin</button>
              </div>
          </div>

          {/* <!-- Stats --> */}
          <div className="stats">

              <div className="card">
                  <span className="badge green">+12.5%</span>
                  <h4>TOTAL STUDENTS</h4>
                  <h2>2,842</h2>
                  <div className="small-info">
                      <span>Active 2,710</span>
                      <span>Inactive 132</span>
                  </div>
              </div>

              <div className="card">
                  <span className="badge green">+8.2%</span>
                  <h4>MONTHLY REVENUE</h4>
                  <h2>₦142,500</h2>

                  <div className="progress">
                      <div className="progress-fill"></div>
                  </div>

                  <p>75% of quarterly target reached</p>
              </div>

              <div className="card">
                  <span className="badge">Stable</span>
                  <h4>SYSTEM HEALTH</h4>
                  <h2>99.9%</h2>
                  <p className="health">● All microservices operational</p>
              </div>

          </div>

          {/* <!-- Content Area --> */}
          <div className="content-grid">

              {/* <!-- Admin Access --> */}
              <section className="access-panel">
                  <h2>Admin Access Control</h2>
                  <p>Delegate module permissions to staff.</p>

                  <div className="admin-item">
                      <div className="admin-info">
                          <img src="https://i.pravatar.cc/60?img=11"/>
                          <div>
                              <h4>Marcus Chen</h4>
                              <span>Head of Academics</span>
                          </div>
                      </div>

                      <div className="tags">
                          <span>Grades</span>
                          <span>Timetable</span>
                      </div>

                      <button>Manage Permissions</button>
                  </div>

                  <div className="admin-item">
                      <div className="admin-info">
                          <img src="https://i.pravatar.cc/60?img=12" alt=""/>
                          <div>
                              <h4>Sarah Jenkins</h4>
                              <span>Finance Director</span>
                          </div>
                      </div>

                      <div className="tags">
                          <span>Payments</span>
                      </div>

                      <button>Manage Permissions</button>
                  </div>

                  <div className="admin-item">
                      <div className="admin-info">
                          <img src="https://i.pravatar.cc/60?img=13"/>
                          <div>
                              <h4>David Miller</h4>
                              <span>IT Coordinator</span>
                          </div>
                      </div>

                      <div className="tags">
                          <span>Grades</span>
                          <span>Timetable</span>
                          <span>Payments</span>
                      </div>

                      <button>Manage Permissions</button>
                  </div>

                  <a href="#" className="view-all">View All Sub-Admins →</a>

              </section>

              {/* <!-- Recent Activity --> */}
              <section className="activity-panel">
                  <h2>Recent Activity</h2>

                  <div className="activity">
                      <h4>Access Revoked</h4>
                      <p>Admin David Miller revoked Grade access.</p>
                      <small>2 mins ago</small>
                  </div>

                  <div className="activity">
                      <h4>Bulk Payment Processed</h4>
                      <p>Q3 Semester fees processed successfully.</p>
                      <small>45 mins ago</small>
                  </div>

                  <div className="activity">
                      <h4>System Update</h4>
                      <p>Version 4.2.1 deployed successfully.</p>
                      <small>2 hours ago</small>
                  </div>

                  <div className="activity">
                      <h4>New Student Enrollment</h4>
                      <p>15 new students added.</p>
                      <small>5 hours ago</small>
                  </div>

              </section>

          </div>

      </main>
      </div>
    )
  }
  
  export default AdminDashboard