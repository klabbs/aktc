const Insights = ({ completionRate, avgTime }) => {
  return (
    <div className="insights">
      <h4>Assignment Insights</h4>

      <p>Completion Rate <span>{completionRate || 88}%</span></p>

      <div className="progress">
        <div className="fill" style={{ width: (completionRate || 88) + '%' }}></div>
      </div>

      <p>Time to Grade (Avg) <strong>{avgTime || '4.2 hrs'}</strong></p>
    </div>
  );
};

export default Insights;