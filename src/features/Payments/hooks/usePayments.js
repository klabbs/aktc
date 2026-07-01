import { useEffect, useState } from "react";
import { getPayments } from "../api/paymentsApi";

export const usePayments = () => {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPayments = async () => {
    try {
      const res = await getPayments();
      setPayments(res.data.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPayments();
  }, []);

  return {
    payments,
    loading,
    setPayments,     //  ADD THIS
    fetchPayments,   //   (for refresh if needed)
  };
};