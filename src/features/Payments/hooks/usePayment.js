import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPayment } from "../api/paymentsApi";

export const usePayment = () => {
  const { id } = useParams();

  const [payment, setPayment] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPayment = async () => {
      try {
        const res = await getPayment(id);

        setPayment(res.data.data); // ✅ consistent
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPayment();
  }, [id]);

  return { payment, loading };
};