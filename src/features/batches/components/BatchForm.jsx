import { useState } from "react";

const BatchForm = () => {
  const [formData, setFormData] = useState({
    studentName: "",
    course: "",
    session: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createBatch(formData);

      alert("Batch Successful");

      setFormData({
        studentName: "",
        course: "",
        session: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="studentName"
        placeholder="Student Name"
        value={formData.studentName}
        onChange={handleChange}
      />

      <input
        name="course"
        placeholder="Course"
        value={formData.course}
        onChange={handleChange}
      />

      <input
        name="session"
        placeholder="Session"
        value={formData.session}
        onChange={handleChange}
      />

      <button type="submit">See Batches</button>
    </form>
  );
};

export default BatchForm;