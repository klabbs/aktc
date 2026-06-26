import AnnouncementTable from "../components/AnnouncementTable";
import useDocumentTitle from "../../../hooks/UseDocumentTitle";

const AnnouncementsPage = () => {
  useDocumentTitle("Announcements | AKTC");

  return (
    <>
      <h1>Announcements</h1>
      <AnnouncementTable />
    </>
  );
};

export default AnnouncementsPage;
