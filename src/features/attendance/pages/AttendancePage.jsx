import { Link } from "react-router-dom";
import { useAttendanceList } from "../hooks";
import useDocumentTitle from "../../../hooks/useDocumentTitle";

const AttendancePage = () => {
  useDocumentTitle("Attendance | AKTC");

  const { attendances, loading, error } = useAttendanceList();

  if (loading) return <p>Loading attendance records...</p>;
  if (error) return <p>Failed to load attendance records.</p>;

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h1>Attendance</h1>
        <Link to="/attendance/new">
          <button>+ New Record</button>
        </Link>
      </div>

      {attendances.length === 0 ? (
        <p>No attendance records found.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Student</th>
              <th>Course</th>
              <th>Date</th>
              <th>Time In</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {attendances.map((rec) => (
              <tr key={rec._id}>
                <td>{rec.studentName}</td>
                <td>{rec.course}</td>
                <td>{rec.date}</td>
                <td>{rec.timeIn}</td>
                <td>{rec.status}</td>
                <td>
                  <Link to={`/attendance/${rec._id}/edit`}>Edit</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default AttendancePage;
