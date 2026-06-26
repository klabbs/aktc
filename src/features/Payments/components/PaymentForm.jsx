const PaymentForm = ({
  formData,
  setFormData,
  onSubmit,
  submitText = "Pay Now",
}) => {
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: name === "amount" ? Number(value) : value,
    }));
  };

  return (
    <form onSubmit={onSubmit}>
      <p>User ID:</p>
      <input
        name="userId"
        value={formData.userId || ""}
        onChange={handleChange}
        required
      />

      <p>Course ID:</p>
      <input
        name="courseId"
        value={formData.courseId || ""}
        onChange={handleChange}
        required
      />

      <p>Amount:</p>
      <input
        name="amount"
        type="number"
        min="0"
        value={formData.amount || ""}
        onChange={handleChange}
        required
      />

      <p>Payment Method:</p>
      <select
        name="paymentMethod"
        value={formData.paymentMethod || "Card"}
        onChange={handleChange}
      >
        <option value="Card">Card</option>
        <option value="Transfer">Transfer</option>
        <option value="Cash">Cash</option>
        <option value="Wallet">Wallet</option>
      </select>

      <p>Transaction ID:</p>
      <input
        name="transactionId"
        value={formData.transactionId || ""}
        onChange={handleChange}
        required
      />

      <p>Gateway Ref:</p>
      <input
        name="paymentGatewayRef"
        value={formData.paymentGatewayRef || ""}
        onChange={handleChange}
      />

      <p>Status:</p>
      <select
        name="status"
        value={formData.status || "Pending"}
        onChange={handleChange}
      >
        <option value="Pending">Pending</option>
        <option value="Paid">Paid</option>
        <option value="Failed">Failed</option>
        <option value="Refunded">Refunded</option>
      </select>

      <button type="submit">{submitText}</button>
    </form>
  );
};

export default PaymentForm;