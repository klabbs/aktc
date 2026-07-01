// AttendanceForm — reusable for both Create and Edit
const AttendanceForm = ({
  formData,
  setFormData,
  onSubmit,
  submitText = "Save",
}) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="studentName">Student Name</label>
        <input
          id="studentName"
          name="studentName"
          type="text"
          placeholder="e.g. Flourish Eze"
          value={formData.studentName || ""}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="course">Course</label>
        <input
          id="course"
          name="course"
          type="text"
          placeholder="e.g. UI/UX Design"
          value={formData.course || ""}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="date">Date</label>
        <input
          id="date"
          name="date"
          type="date"
          value={formData.date || ""}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="timeIn">Time In</label>
        <input
          id="timeIn"
          name="timeIn"
          type="time"
          value={formData.timeIn || ""}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="timeOut">Time Out</label>
        <input
          id="timeOut"
          name="timeOut"
          type="time"
          value={formData.timeOut || ""}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="status">Status</label>
        <select
          id="status"
          name="status"
          value={formData.status || "present"}
          onChange={handleChange}
          required
        >
          <option value="present">Present</option>
          <option value="absent">Absent</option>
          <option value="late">Late</option>
          <option value="excused">Excused</option>
        </select>
      </div>

      <div>
        <label htmlFor="notes">Notes</label>
        <textarea
          id="notes"
          name="notes"
          placeholder="Optional notes..."
          value={formData.notes || ""}
          onChange={handleChange}
          rows={3}
        />
      </div>

      <button type="submit">{submitText}</button>
    </form>
  );
};

export default AttendanceForm;
