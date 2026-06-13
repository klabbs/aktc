import { useEffect, useState } from "react";
import { getUsers } from "../api/usersApi";

export const useUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then((res) =>
      setUsers(res.data)
    );
  }, []);

  return { users };
};