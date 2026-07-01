import { useUsers } from "../../users/hooks/useUsers";
import { useCourses } from "../../courses/hooks/useCourses";

const FormPage = ({
  formData,
  setFormData,
  onSubmit,
  isEditing = false,
}) => {
  const { users, loading, error } = useUsers();
  const { courses } = useCourses();
  
  // Only instructors
  const instructors = users.filter(
    (user) => user.role?.toLowerCase() === "instructor"
  );

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  if (loading) return <p>Loading ...</p>;

  if (error) return <p>Unable to load data.</p>;

  return (
    <div className="grade-card">
      <form onSubmit={onSubmit}>
      
        <h3>{isEditing ? "Update Batch" : "New Batch"}</h3>
        
        <div className="mb-5">
          <label htmlFor="course">Course: </label>
    
          <select
            id="course"
            name="course"
            value={formData.course || ""}
            onChange={handleChange}
            required
          >
            <option value="">Select Course</option>

            {courses.map((data) => (
              <option key={data._id} value={data._id}>
                {data.title}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-5">
          <label htmlFor="className">Batch Code</label>
          <input
            type="text"
            id="batchCode"
            name="batchCode"
            value={formData.batchCode || ""}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-5">
          <label htmlFor="startDate">Start Date</label>
          <input
            type="date"
            id="startDate"
            name="startDate"
            value={formData.startDate || ""}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-5">
          <label htmlFor="endDate">End Date</label>
          <input
            type="date"
            id="endDate"
            name="endDate"
            value={formData.endDate || ""}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-5">
          <label htmlFor="schedule">Schedule</label>
          <input
            type="text"
            id="schedule"
            name="schedule"
            value={formData.schedule || ""}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-5">
          <label htmlFor="capacity">Capacity</label>
          <input
            type="number"
            id="capacity"
            name="capacity"
            value={formData.capacity || ""}
            onChange={handleChange}
            required
          />
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


        <button type="submit">
          {isEditing ? "Update" : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default FormPage;