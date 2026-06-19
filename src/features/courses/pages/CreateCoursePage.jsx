import { useState } from "react";
import CourseForm from "../components/CourseForm";

const CreateCoursePage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "student",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
      <>
      <div>
          <h3>Add Course</h3>
      </div>
    <CourseForm
      formData={formData}
      setFormData={setFormData}
      onSubmit={handleSubmit}
    />
    </>
  );
};

export default CreateCoursePage;