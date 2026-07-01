import { useEffect, useState } from "react";
import { getAll } from "../api";

export const useClasses = () => {
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        setLoading(true);

        const res = await getAll();

        // If API returns an array
        if (Array.isArray(res.data)) {
          setClasses(res.data);
        }
        // If API returns { success, data }
        else if (res.data.data) {
          setClasses(res.data.data);
        }
      } catch (err) {
        console.error(err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchClasses();
  }, []);

  return { classes, loading, error };
};
