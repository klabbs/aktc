import { useEffect, useState } from "react";
import { getUsers } from "../api/usersApi";
import { createComplaint, getComplaints } from "../api/Ticketapi";

export const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [complaints, setComplaints] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    getUsers()
      .then((res) => setUsers(res.data))
      .catch((err) => setError(err));
  }, []);

  const loadComplaints = async () => {
    try {
      setLoading(true);
      const res = await getComplaints();
      setComplaints(res.data);
      return res;
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const submitComplaint = async (data) => {
    try {
      setLoading(true);
      const res = await createComplaint(data);
      return res;
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    users,
    complaints,
    loading,
    error,
    loadComplaints,
    submitComplaint,
  };
};