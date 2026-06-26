import styles from './ForumsPage.module.css';
// import ForumTable from "../components/ForumTable";
import useDocumentTitle from "../../../hooks/useDocumentTitle";

const ForumsPage = () => {
  useDocumentTitle("Forums | AKTC");

  return (
    <>
      <h1>Forums (all)</h1>

      {/* <ForumTable /> */}
    </>
  );
};

export default ForumsPage