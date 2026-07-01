const StatsCards = ({ stats }) => {
  return (
    <div className="stats">
      <div className="card">
        <p>Class Average</p>
        <h2>{stats?.average || '84.2%'}</h2>
        <small className="green">+2.1%</small>
      </div>

      <div className="card">
        <p>Pending Reviews</p>
        <h2>{stats?.pending || 12}</h2>
        <small>Assignments</small>
      </div>

      <div className="card">
        <p>Top Performer</p>
        <div className="student">
          <div className="avatar">J</div>
          <span>{stats?.topPerformer || 'Julian Doe'}</span>
        </div>
      </div>

      <div className="card">
        <p>Next Milestone</p>
        <h4>Final Exam</h4>
        <small>In 14 Days</small>
      </div>
    </div>
  );
};

export default StatsCards;