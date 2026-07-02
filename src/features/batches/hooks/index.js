import { useEffect, useState } from "react";
import { getAll, getById } from "../api";

export const useBatches = (id = null) => {
  const [data, setData] = useState(id ? null : []);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        if (id) {
          // Fetch a single batch
          const res = await getById(id);
          setData(res.data.data ?? res.data);
        } else {
          // Fetch all batches
          const res = await getAll();

          if (Array.isArray(res.data)) {
            setData(res.data);
          } else {
            setData(res.data.data ?? []);
          }
        }
      } catch (err) {
        console.error(err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return {
    batches: id ? null : data,
    batch: id ? data : null,
    loading,
    error,
  };
};
