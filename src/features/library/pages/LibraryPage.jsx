import LibraryTable from "../components/libraryTable";
import useDocumentTitle from "../../../hooks/useDocumentTitle";

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
