const ClassesForm = ({
  formData,
  setFormData,
  onSubmit,
  isEditing = false,
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
      <div>
        <label htmlFor="className">Class Name</label>
        <input
          type="text"
          id="className"
          name="className"
          value={formData.className || ""}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="instructor">Instructor</label>
        <input
          type="text"
          id="instructor"
          name="instructor"
          value={formData.instructor || ""}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="schedule">Schedule</label>
        <input
          type="datetime-local"
          id="schedule"
          name="schedule"
          value={formData.schedule || ""}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="room">Room</label>
        <input
          type="text"
          id="room"
          name="room"
          value={formData.room || ""}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows="4"
          value={formData.description || ""}
          onChange={handleChange}
        />
      </div>

      <button type="submit">
        {isEditing ? "Update Class" : "Create Class"}
      </button>
    </form>
  );
};

export default ClassesForm;