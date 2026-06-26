const WalletForm = ({
  formData,
  setFormData,
  onSubmit,
  submitText = "Save",
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
      user:
      <input
        name="user"
        value={formData.user || ""}
        onChange={handleChange}
      />

      <hr />

      balance:
      <input
        name="balance"
        value={formData.balance || ""}
        onChange={handleChange}
      />

      <hr />

      currency:
      <input
        name="currency"
        value={formData.currency || ""}
        onChange={handleChange}
      />

      <button type="submit">{submitText}</button>
    </form>
  );
};

export default WalletForm;