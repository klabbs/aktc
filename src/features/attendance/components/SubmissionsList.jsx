const SubmissionsList = ({ submissions }) => {
  return (
    <div className="submissions">
      <h3>Recent Student Submissions</h3>
      {submissions && submissions.length > 0 ? (
        submissions.map((student, index) => (
          <div className="row" key={index}>
            <img src={student.avatar || 'https://i.pravatar.cc/50?img=' + (index + 10)} alt={student.name} />
            <span>{student.name}</span>
            <span className={'status ' + student.status}>
              {student.status.charAt(0).toUpperCase() + student.status.slice(1)}
            </span>
            <strong>{student.score !== null && student.score !== undefined ? student.score + '/100' : '--/100'}</strong>
          </div>
        ))
      ) : (
        <p>No submissions found</p>
      )}
    </div>
  );
};

export default SubmissionsList;