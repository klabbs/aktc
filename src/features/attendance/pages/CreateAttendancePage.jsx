import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AttendanceForm from "../component/AttendanceForm";
import { createData } from "../api/attendanceApi";
import useDocumentTitle from "../../../hooks/useDocumentTitle";

const CreateAttendancePage = () => {
  useDocumentTitle("New Attendance | AKTC");

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    studentName: "",
    course: "",
    date: "",
    timeIn: "",
    timeOut: "",
    status: "present",
    notes: "",
  });
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError("");
      await createData(formData);
      navigate("/attendance");
    } catch (err) {
      console.error(err);
      setError(err?.response?.data?.message || "Failed to create attendance record.");
    }
  };

  return (
    <>
      <h2>New Attendance Record</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <AttendanceForm
        formData={formData}
        setFormData={setFormData}
        onSubmit={handleSubmit}
        submitText="Create Attendance"
      />
    </>
  );
};

export default CreateAttendancePage;
