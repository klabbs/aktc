import { useState } from "react";
import { createCourse } from "../api/coursesApi";
import CourseForm from "../components/CourseForm";

const CreateCoursePage = () => {
  const [formData, setFormData] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    await createCourse(formData);

    // navigate(...)
  };

  return (
    <CourseForm
      formData={formData}
      setFormData={setFormData}
      onSubmit={handleSubmit}
      submitText="Create Course"
    />
  );
};

export default CreateCoursePage;