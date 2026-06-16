import styles from './UsersPage.module.css';
import UserTable from "../components/UserTable";
import useDocumentTitle from "../../../hooks/useDocumentTitle";

const UsersPage = () => {
  useDocumentTitle("Users | AKTC");

  return (
    <>
      <h1>Users</h1>

      <UserTable />
    </>
  );
};

export default UsersPage