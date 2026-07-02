import { useState } from "react";
import { useNavigate } from "react-router-dom";
import  FormPage  from "../components/form";
import { createData } from "../api";

const CreatePage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    course: "",
    batchCode: "",
    startDate: "",
    endDate: "",
    schedule:"",
    capacity: "",
    instructor: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createData(formData);
      navigate("/batches");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <FormPage
        formData={formData}
        setFormData={setFormData}
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default CreatePage;
