import { useEffect, useState } from "react";
import { getAll } from "../api";

export const useBatches = () => {
  const [batches, setBatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBatches = async () => {
      try {
        setLoading(true);

        const res = await getAll();

        // If API returns an array
        if (Array.isArray(res.data)) {
          setBatches(res.data);
        }
        // If API returns { success, data }
        else if (res.data.data) {
          setBatches(res.data.data);
        }
      } catch (err) {
        console.error(err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBatches();
  }, []);

  return { batches, loading, error };
};
