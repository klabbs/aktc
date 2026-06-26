import ClassTable from "../components/ClassTable";
import useDocumentTitle from "../../../hooks/UseDocumentTitle";

const ClassesPage = () => {
  useDocumentTitle("Classes | AKTC");

  return (
    <>
      <h1>Classes</h1>
      <ClassTable />
    </>
  );
};

export default ClassesPage;
