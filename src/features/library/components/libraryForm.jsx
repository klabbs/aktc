const LibraryForm = ({
  formData,
  setFormData,
  onSubmit,
  isEditing = false,
}) => {
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title || ""}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="author">Author</label>
        <input
          type="text"
          id="author"
          name="author"
          value={formData.author || ""}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="category">Category</label>
        <input
          type="text"
          id="category"
          name="category"
          value={formData.category || ""}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows="5"
          value={formData.description || ""}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="fileUrl">File URL</label>
        <input
          type="url"
          id="fileUrl"
          name="fileUrl"
          value={formData.fileUrl || ""}
          onChange={handleChange}
        />
      </div>

      <button type="submit">
        {isEditing ? "Update Library" : "Add Library"}
      </button>
    </form>
  );
};

export default LibraryForm;