import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AnnouncementForm from "../components/AnnouncementForm";
import { createAnnouncement } from "../api/announcenmentApi";

const CreateAnnouncementPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    message: "",
    type: "general"
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createAnnouncement(formData);
      navigate("/admin/announcements");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h1>Create Announcement</h1>
      <AnnouncementForm
        formData={formData}
        setFormData={setFormData}
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default CreateAnnouncementPage;
