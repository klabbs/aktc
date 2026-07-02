import TimetableForm from "../components/TimetableForm";
import useDocumentTitle from "../../../hooks/useDocumentTitle";

const CreateTimetablePage = () => {
  useDocumentTitle("Timetable | AKTC");

  

  return (
    <>
        <TimtableForm/>
        formData={formData}
        setFormData={setFormData}
        onSubmit={handleSubmit}
    </>
    );
};

export default CreateTimetablePage