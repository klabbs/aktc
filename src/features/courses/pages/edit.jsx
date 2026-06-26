import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import { updateCourse, getCourse  } from "../api/coursesApi";
import CourseForm from "../components/CourseForm";

const EditCoursePage = () => {
    const { id } = useParams();

    const [formData, setFormData] = useState({});
  
    useEffect(() => {
      const loadCourse = async () => {
        const res = await getCourse(id);
        setFormData(res.data.data);
      };
  
      loadCourse();
    }, [id]);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      await updateCourse(id, formData);
  
      // navigate(...)
    };
  
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