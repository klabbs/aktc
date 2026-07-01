const CourseForm = ({
  formData,
  setFormData,
  onSubmit,
  submitText = "Save",
}) => {
  const handleChange = (e) => {
    const { name, value } = e.target;

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          //setError("");
    
          const response = await createUser(formData)
          const data = response.data;
            console.log("fff",data)
          
          //navigate("/"+data.user?.role);
        } catch (err) {
          setError(
            err?.response?.data?.message ||
              "failed"
          );
        }
      };
  
    return (
      <form onSubmit={handleSubmit}>
        Name: <input
          name="name"
          value={formData?.name || ""}
          onChange={handleChange}
        />
        <hr/>
        Email: <input
          name="email"
          value={formData?.email || ""}
          onChange={handleChange}
        />
         <hr/>
        Password: <input
          name="password"
          value={formData?.password || ""}
          onChange={handleChange}
        />
        <hr/>
        Phone: <input
          name="phone"
          value={formData?.phone || ""}
          onChange={handleChange}
        />
        <hr/>
        Role:
        <select
          name="role"
          value={formData?.role || ""}
          onChange={handleChange}
        >
          <option value="student">Student</option>
          <option value="instructor">Instructor</option>
          <option value="manager">Manager</option>
          <option value="admin">Admin</option>
        </select>
  
        <button type="submit">
          Save User
        </button>
      </form>
    );
  };

  return (
    <form onSubmit={onSubmit}>
      Title:
      <input
        name="title"
        value={formData.title || ""}
        onChange={handleChange}
      />

      <hr />

      Code:
      <input
        name="code"
        value={formData.code || ""}
        onChange={handleChange}
      />

      <hr />

      Description:
      <input
        name="description"
        value={formData.description || ""}
        onChange={handleChange}
      />

      <hr />

      Credits:
      <input
        name="credits"
        type="number"
        value={formData.credits || ""}
        onChange={handleChange}
      />

      <hr />

      Duration:
      <input
        name="duration"
        value={formData.duration || ""}
        onChange={handleChange}
      />

      <hr />

      Fee:
      <input
        name="fee"
        type="number"
        value={formData.fee || ""}
        onChange={handleChange}
      />

      <button type="submit">{submitText}</button>
    </form>
  );
};

export default CourseForm;