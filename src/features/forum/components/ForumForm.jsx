// ForumForm — reusable for both Create and Edit
const ForumForm = ({
  formData,
  setFormData,
  onSubmit,
  submitText = "Save",
}) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          type="text"
          placeholder="Forum post title"
          value={formData.title || ""}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="category">Category</label>
        <select
          id="category"
          name="category"
          value={formData.category || "general"}
          onChange={handleChange}
          required
        >
          <option value="general">General</option>
          <option value="announcement">Announcement</option>
          <option value="question">Question</option>
          <option value="discussion">Discussion</option>
        </select>
      </div>

      <div>
        <label htmlFor="body">Content</label>
        <textarea
          id="body"
          name="body"
          placeholder="Write your post..."
          value={formData.body || ""}
          onChange={handleChange}
          rows={6}
          required
        />
      </div>

      <button type="submit">{submitText}</button>
    </form>
  );
};

export default ForumForm;
