import { useState } from 'react';
import { createAttendance, updateAttendance, deleteAttendance } from '../api/attendanceApi';

export const useAttendanceMutation = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const createMutation = async (data) => {
    setLoading(true);
    try {
      const response = await createAttendance(data);
      setError(null);
      return response.data;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const updateMutation = async (id, data) => {
    setLoading(true);
    try {
      const response = await updateAttendance(id, data);
      setError(null);
      return response.data;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const deleteMutation = async (id) => {
    setLoading(true);
    try {
      await deleteAttendance(id);
      setError(null);
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { createMutation, updateMutation, deleteMutation, loading, error };
};