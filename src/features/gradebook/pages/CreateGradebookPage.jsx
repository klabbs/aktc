import GradebookForm from "../components/GradebookForm";
import useDocumentTitle from "../../../hooks/useDocumentTitle";

const GradebookPage = () => {
  useDocumentTitle("Gradebook | AKTC");

  return (
    <>
        <GradebookForm/>
    </>
    );
};

export default CreateGradebookPage