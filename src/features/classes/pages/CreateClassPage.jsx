import { useState } from "react";
import { useNavigate } from "react-router-dom";
import  ClassesForm  from "./../components/classesform";
import { createClasses } from "./../api/classesApi";

const CreateClassPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    instructor: "",
    dateTime: "",
    room: "",
    description: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createClasses(formData);
      navigate("/classes");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <ClassesForm
        formData={formData}
        setFormData={setFormData}
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default CreateClassPage;
