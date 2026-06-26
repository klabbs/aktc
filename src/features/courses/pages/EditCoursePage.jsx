import { useEffect, useState } from "react";
import { useCourse } from "../hooks/useCourse";
import { updateCourse } from "../api/coursesApi";
import CourseForm from "../components/CourseForm";

const EditCoursePage = () => {
  const { course, loading } = useCourse();

  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (course) {
      setFormData(course);
    }
  }, [course]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await updateCourse(course._id, formData);
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <CourseForm
      formData={formData}
      setFormData={setFormData}
      onSubmit={handleSubmit}
      submitText="Update Course"
    />
  );
};

export default EditCoursePage;