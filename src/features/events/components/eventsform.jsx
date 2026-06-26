const EventsForm = ({
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
    <form onSubmit={onSubmit} className="events-form">
      <div className="events-form-group">
        <label htmlFor="eventName">Event Name *</label>
        <input
          type="text"
          id="eventName"
          name="eventName"
          value={formData.eventName || ""}
          onChange={handleChange}
          required
          placeholder="Enter event name"
        />
      </div>

      <div className="events-form-group">
        <label htmlFor="organizer">Organizer *</label>
        <input
          type="text"
          id="organizer"
          name="organizer"
          value={formData.organizer || ""}
          onChange={handleChange}
          required
          placeholder="Enter organizer name"
        />
      </div>

      <div className="events-form-group">
        <label htmlFor="date">Date & Time *</label>
        <input
          type="datetime-local"
          id="date"
          name="date"
          value={formData.date || ""}
          onChange={handleChange}
          required
        />
      </div>

      <div className="events-form-group">
        <label htmlFor="location">Location</label>
        <input
          type="text"
          id="location"
          name="location"
          value={formData.location || ""}
          onChange={handleChange}
          placeholder="Enter event location"
        />
      </div>

      <div className="events-form-group full-width">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          value={formData.description || ""}
          onChange={handleChange}
          placeholder="Enter event description..."
          className="full-width"
        />
      </div>

      <div className="events-form-group">
        <label htmlFor="capacity">Capacity</label>
        <input
          type="number"
          id="capacity"
          name="capacity"
          min="1"
          value={formData.capacity || ""}
          onChange={handleChange}
          placeholder="Enter capacity"
        />
      </div>

      <div className="events-form-buttons">
        {onCancel && (
          <button type="button" className="btn-cancel" onClick={onCancel}>
            Cancel
          </button>
        )}
        <button type="submit" className="btn-submit">
          {isEditing ? "Update Event" : "Create Event"}
        </button>
      </div>
    </form>
  );
};

export default EventsForm;