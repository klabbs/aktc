import LibraryTable from "../components/LibraryTable";
import useDocumentTitle from "../../../hooks/UseDocumentTitle";

const LibraryPage = () => {
  useDocumentTitle("Library | AKTC");

  return (
    <>
      <h1>Library</h1>
      <LibraryTable />
    </>
  );
};

export default LibraryPage;
