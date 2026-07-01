import { useUsers } from "../../users/hooks/useUsers";
import { useBatches } from "../../batches/hooks";

const FormPage = ({
  formData,
  setFormData,
  onSubmit,
  isEditing = false,
}) => {
  const { users, loading, error } = useUsers();
  const { batches } = useBatches();
  
  // Only students for enrolment
  const students = users.filter(
    (user) => user.role?.toLowerCase() === "student"
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
      
        <h3>{isEditing ? "Update Enrollment" : "New Enrollment"}</h3>
        
        <div className="mb-5">
          <label htmlFor="course">Student: </label>
    
          <select
            id="user"
            name="user"
            value={formData.user || ""}
            onChange={handleChange}
            required
          >
            <option value="">Select students</option>

            {students.map((data) => (
              <option key={data._id} value={data._id}>
                {data.name}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-5">
          <label htmlFor="course">Batch: </label>
    
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
                {data.batchCode}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-5">
          <label htmlFor="className">Enrollment Date</label>
          <input
            type="date"
            id="enrollmentDate"
            name="enrollmentDate"
            value={formData.enrollmentDate || ""}
            onChange={handleChange}
            required
          />
        </div>


          <div className="mb-5">
          <label htmlFor="status">Status: </label>
    
          <select
            id="status"
            name="status"
            value={formData.status|| ""}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="active">Active</option>
            <option value="completed">Completed</option>
            <option value="dropped">Dropped</option>
            <option value="pending">pending</option>

            
          </select>
        </div>
        
          <div className="mb-5">
          <label htmlFor="course">PaymentStatus: </label>
    
          <select
            id="paymentStatus"
            name="paymentStatus"
            value={formData.paymentStatus || ""}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="pending">Pending</option>
            <option value="partial">Partial</option>
            <option value="paid">Paid</option>
            

            
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