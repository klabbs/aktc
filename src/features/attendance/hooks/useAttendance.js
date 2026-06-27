import { useState, useEffect } from 'react';
import { getAllAttendance } from '../api/attendanceApi';

export const useAttendance = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchAttendance = async () => {
    setLoading(true);
    try {
      const response = await getAllAttendance();
      setData(response.data.data || []);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAttendance();
  }, []);

  return { data, loading, error, refetch: fetchAttendance };
};