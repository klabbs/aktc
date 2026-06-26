import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createPayment } from "../api/paymentsApi";
import PaymentForm from "../components/PaymentForm";

const CreatePaymentPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    userId: "",
    courseId: "",
    amount: "",
    paymentMethod: "Card",
    transactionId: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createPayment(formData);
      navigate("/payments"); // ✅ redirect after create
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <PaymentForm
      formData={formData}
      setFormData={setFormData}
      onSubmit={handleSubmit}
      submitText="Create Payment"
    />
  );
};

export default CreatePaymentPage;