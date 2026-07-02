import { useEffect, useState } from "react";
import { getAll } from "../api";

export const useEnrollment = () => {
  const [enrollment, setEnrollment] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEnrollment = async () => {
      try {
        setLoading(true);

        const res = await getAll();

        // If API returns an array
        if (Array.isArray(res.data)) {
          setEnrollment(res.data);
        }
        // If API returns { success, data }
        else if (res.data.data) {
          setEnrollment(res.data.data);
        }
      } catch (err) {
        console.error(err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchEnrollment();
  }, []);

  return { enrollment, loading, error };
};
