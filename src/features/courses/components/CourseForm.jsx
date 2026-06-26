const CourseForm = ({
  formData,
  setFormData,
  onSubmit,
  submitText = "Save",
}) => {
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={onSubmit}>
      Title:
      <input
        name="title"
        value={formData.title || ""}
        onChange={handleChange}
      />

      <hr />

      Code:
      <input
        name="code"
        value={formData.code || ""}
        onChange={handleChange}
      />

      <hr />

      Description:
      <input
        name="description"
        value={formData.description || ""}
        onChange={handleChange}
      />

      <hr />

      Credits:
      <input
        name="credits"
        type="number"
        value={formData.credits || ""}
        onChange={handleChange}
      />

      <hr />

      Duration:
      <input
        name="duration"
        value={formData.duration || ""}
        onChange={handleChange}
      />

      <hr />

      Fee:
      <input
        name="fee"
        type="number"
        value={formData.fee || ""}
        onChange={handleChange}
      />

      <button type="submit">{submitText}</button>
    </form>
  );
};

export default CourseForm;