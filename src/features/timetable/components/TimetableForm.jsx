import {createTimetable} from "./../api/timetableApi"
const TimetableForm = ({
    formData,
    setFormData,
    onSubmit,
  }) => {
    const handleChange = (e) => {
      const { name, value } = e.target;
  
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          //setError("");
    
          const response = await createTimetable(formData)
          const data = response.data;
            console.log("fff",data)
          
          //navigate("/"+data.user?.role);
        } catch (err) {
          setError(
            err?.response?.data?.message ||
              "failed"
          );
        }
      };
  
    return (
      <form onSubmit={handleSubmit}>
        Enrollment: <input
          name="enroll"
          value={formData?.enrollment || ""}
          onChange={handleChange}
        />
        <hr/>
       assignmentName: <input
          name="assignment"
          value={formData?.assignmentName || ""}
          onChange={handleChange}
        />
         <hr/>
        Score: <input
          name="score"
          value={formData?.score || ""}
          onChange={handleChange}
        />
        <hr/>
         maxScore: <input
          name=" maxScore"
          value={formData?. maxScore|| ""}
          onChange={handleChange}
        />
        <hr/>
         type:
        <select
          name=" type"
          value={formData?. type || ""}
          onChange={handleChange}
        >
          <option value="quiz">Quiz</option>
          <option value="exam">Exam</option>
          <option value="assignment">Assignment</option>
          <option value="project">Project</option>
        </select>
  
        <button type="submit">
          Submit
        </button>
      </form>
    );
  };
  
  export default TimetableForm;