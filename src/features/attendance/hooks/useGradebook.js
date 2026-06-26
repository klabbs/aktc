import { useState, useEffect } from 'react';
import { getAllGrades } from '../api/gradebookApi';

export const useGradebook = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchGrades = async () => {
    setLoading(true);
    try {
      const response = await getAllGrades();
      setData(response.data);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGrades();
  }, []);

  return { data, loading, error, refetch: fetchGrades };
};