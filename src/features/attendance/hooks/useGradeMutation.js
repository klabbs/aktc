import { useState } from 'react';
import { createGrade, updateGrade, deleteGrade } from '../api/gradebookApi';

export const useGradeMutation = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const createMutation = async (data) => {
    setLoading(true);
    try {
      const response = await createGrade(data);
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
      const response = await updateGrade(id, data);
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
      await deleteGrade(id);
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