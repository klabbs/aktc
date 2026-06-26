import { useEffect, useState } from "react";
import { getPayments } from "../api/paymentsApi";

export const usePayments = () => {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const res = await getPayments();

        // ✅ ALWAYS extract data the same way
        setPayments(res.data.data);

      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPayments();
  }, []);

  return { payments, loading };
};