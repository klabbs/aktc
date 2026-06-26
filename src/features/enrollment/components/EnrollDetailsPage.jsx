const EnrollDetails = ({ enrollment }) => {
  if (!enrollment) return null;

  return (
    <div>
      <h2>{enrollment.studentName}</h2>
      <p>Course: {enrollment.course}</p>
      <p>Session: {enrollment.session}</p>
      <p>Status: {enrollment.status}</p>
    </div>
  );
};

export default EnrollDetails;