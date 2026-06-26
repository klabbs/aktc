import GradebookForm from "../components/GradebookForm";
import useDocumentTitle from "../../../hooks/useDocumentTitle";

const CreateGradebookPage = () => {
  useDocumentTitle("Gradebook | AKTC");

  return (
    <>
        <GradebookForm/>
    </>
    );
};

export default CreateGradebookPage