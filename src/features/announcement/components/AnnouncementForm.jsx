const AnnouncementForm = ({
    formData,
    setFormData,
    onSubmit,
    isEditing = false,
    onCancel,
  }) => {
    const handleChange = (e) => {
      const { name, value } = e.target;
  
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    };
  
    return (
        <></>
    );
  };
  
  export default AnnouncementForm;