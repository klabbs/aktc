import  { useState } from "react";
import LibraryForm from "../components/libraryform";
import useDocumentTitle from "../../../hooks/UseDocumentTitle";

const CreateLibraryPage = () => {
  useDocumentTitle("Create Library | AKTC");
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    category: "",
    description: "",
    fileUrl: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting library data:", formData);
    // Add API call here
    alert("Library created successfully!");
  };

  return (
    <div>
      <h1>Create Library Item</h1>
      <LibraryForm 
        formData={formData} 
        setFormData={setFormData} 
        onSubmit={handleSubmit} 
      />
    </div>
  );
};

export default CreateLibraryPage;
