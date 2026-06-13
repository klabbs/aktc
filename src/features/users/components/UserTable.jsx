import { useUsers } from "../hooks/useUsers";

const UserTable = () => {
  const { users } = useUsers();
    if(users.success){
      const usersList = users.data;
      return (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>
    
          <tbody>
            {usersList.map((user) => (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    }
  };

  export default UserTable;