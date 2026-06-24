import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { updatePayment, getPayment } from "../api/paymentsApi";
import PaymentForm from "../components/PaymentForm";

const EditPaymentPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({});

  useEffect(() => {
    const loadPayment = async () => {
      const res = await getPayment(id);
      setFormData(res.data.data);
    };

    loadPayment();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await updatePayment(id, formData);
      navigate(`/payments/${id}`);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <PaymentForm
      formData={formData}
      setFormData={setFormData}
      onSubmit={handleSubmit}
      submitText="Update Payment"
    />
  );
};

export default EditPaymentPage;