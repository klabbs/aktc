import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AttendanceForm from "../component/AttendanceForm";
import { useAttendance } from "../hooks";
import { updateData } from "../api/attendanceApi";
import useDocumentTitle from "../../../hooks/useDocumentTitle";

const EditAttendancePage = () => {
  useDocumentTitle("Edit Attendance | AKTC");

  const navigate = useNavigate();
  const { attendance, loading } = useAttendance();
  const [formData, setFormData] = useState({});
  const [error, setError] = useState("");

  // Pre-fill form once data is loaded
  useEffect(() => {
    if (attendance) {
      setFormData(attendance);
    }
  }, [attendance]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError("");
      await updateData(attendance._id, formData);
      navigate("/attendance");
    } catch (err) {
      console.error(err);
      setError(err?.response?.data?.message || "Failed to update attendance record.");
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <h2>Edit Attendance Record</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <AttendanceForm
        formData={formData}
        setFormData={setFormData}
        onSubmit={handleSubmit}
        submitText="Update Attendance"
      />
    </>
  );
};

export default EditAttendancePage;
