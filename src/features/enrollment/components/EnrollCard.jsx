const EnrollCard = ({ enrollment }) => {
  return (
    <div className="border p-4 rounded shadow">
      <h3>{enrollment.studentName}</h3>
      <p>Course: {enrollment.course}</p>
      <p>Session: {enrollment.session}</p>
    </div>
  );
};

export default EnrollCard;