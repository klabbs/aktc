import { useEffect, useState } from "react";
import { getUsers } from "../api/usersApi";

export const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);

        const res = await getUsers();

        console.log("Users response:", res.data);

        // If API returns an array
        if (Array.isArray(res.data)) {
          setUsers(res.data);
        }
        // If API returns { success, data }
        else if (res.data.data) {
          setUsers(res.data.data);
        }
      } catch (err) {
        console.error(err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return { users, loading, error };
};
// import { useEffect, useState } from "react";
// import { getUsers } from "../api/usersApi";

// export const useUsers = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     getUsers().then((res) =>
//       setUsers(res.data)
//     );
//   }, []);

//   return { users };
// };