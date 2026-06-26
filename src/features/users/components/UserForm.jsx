import {createUser} from "./../api/usersApi"
const UserForm = ({
    formData,
    setFormData,
    onSubmit,
  }) => {
    const handleChange = (e) => {
      const { name, value } = e.target;
  
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    };

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
          <option value="management">Manager</option>
          <option value="admin">Admin</option>
        </select>
  
        <button type="submit">
          Save User
        </button>
      </form>
    );
  };
  
  export default UserForm;