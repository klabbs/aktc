import { useState } from "react";
import UserForm from "../components/UserForm";

const CreateUserPage = () => {
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
          <h3>Add User</h3>
      </div>
    <UserForm
      formData={formData}
      setFormData={setFormData}
      onSubmit={handleSubmit}
    />
    </>
  );
};

export default CreateUserPage;