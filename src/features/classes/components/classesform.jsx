import { useUsers } from "../../users/hooks/useUsers";
import { useBatches } from "../../batches/hooks";
const ClassesForm = ({
  formData,
  setFormData,
  onSubmit,
  isEditing = false,
}) => {
  const { users, loading, error } = useUsers();
  const { batches } = useBatches();
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Only instructors
  const instructors = users.filter(
    (user) => user.role?.toLowerCase() === "instructor"
  );

  if (loading) return <p>Loading instructors...</p>;

  if (error) return <p>Unable to load instructors.</p>;

  return (
    <div className="grade-card">
      <form onSubmit={onSubmit}>
        <h3>{isEditing ? "Update Class" : "New Class"}</h3>
       
        <div className="mt-5 mb-5">
          <label htmlFor="className">Class Name</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title || ""}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-5">
          <label htmlFor="batch">Batches: </label>
    
          <select
            id="courseBatch"
            name="courseBatch"
            value={formData.courseBatch || ""}
            onChange={handleChange}
            required
          >
            <option value="">Select Batch</option>

            {batches.map((data) => (
              <option key={data._id} value={data._id}>
                {data.batchCode} - {data.course.title}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-5">
          <label htmlFor="instructor">Instructor</label>
    
          <select
            id="instructor"
            name="instructor"
            value={formData.instructor || ""}
            onChange={handleChange}
            required
          >
            <option value="">Select an Instructor</option>

            {instructors.map((user) => (
              <option key={user._id} value={user._id}>
                {user.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="dateTime">Schedule</label>
          <input
            type="datetime-local"
            id="dateTime"
            name="dateTime"
            value={formData.dateTime || ""}
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
            required
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
    </div>
  );
};

export default ClassesForm;