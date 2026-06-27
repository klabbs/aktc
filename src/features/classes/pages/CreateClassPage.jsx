import { useState } from "react";
import { useNavigate } from "react-router-dom";
import  ClassesForm  from "./../components/classesform";
import { createClasses } from "./../api/classesApi";

const CreateClassPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    message: "",
    type: "general"
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createClasses(formData);
      navigate("/admin/classes");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h1>Create Class</h1>
      <ClassForm
        formData={formData}
        setFormData={setFormData}
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default CreateClassPage;
