import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAll, getById } from "../api/attendanceApi";

// Hook to fetch all attendance records
export const useAttendanceList = () => {
  const [attendances, setAttendances] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      try {
        setLoading(true);
        const res = await getAll();
        const data = Array.isArray(res.data) ? res.data : res.data?.data ?? [];
        setAttendances(data);
      } catch (err) {
        console.error(err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, []);

  return { attendances, loading, error };
};

// Hook to fetch a single attendance record by :id param
export const useAttendance = () => {
  const { id } = useParams();
  const [attendance, setAttendance] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;
    const fetch = async () => {
      try {
        setLoading(true);
        const res = await getById(id);
        setAttendance(res.data?.data ?? res.data);
      } catch (err) {
        console.error(err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, [id]);

  return { attendance, loading, error };
};
